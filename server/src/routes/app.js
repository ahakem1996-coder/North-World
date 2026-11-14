import { Router } from "express";
import ExcelJS from "exceljs";
import { z } from "zod";
import { prisma } from "../config/prisma.js";
import { requireAdmin } from "../middleware/auth.js";
import { attachmentMetadata, parseManualAttachments } from "../utils/attachments.js";
import {
  hasCompleteManualDocumentReference,
  manualClearanceSchema,
  manualDocumentReferenceFields
} from "../utils/manual-input.js";
import { hashPassword } from "../utils/password.js";

const router = Router();
const tripStages = [
  "EN_ROUTE_TO_PORT",
  "CONTAINER_PICKED_UP",
  "EN_ROUTE_TO_CUSTOMER",
  "ARRIVED_AT_CUSTOMER",
  "DELIVERED",
  "RETURNING_EMPTY",
  "EMPTY_RETURNED"
];
const truckStatuses = ["AVAILABLE", "ASSIGNED", "ON_TRIP", "MAINTENANCE", "INACTIVE"];
const ACTIVE_TRIP_FILTER = { emptyReturnedAt: null };
const MAX_IMPORT_FILE_BYTES = 3 * 1024 * 1024;
const MAX_IMPORT_ROWS = 500;
const DRIVER_IMPORT_COLUMNS = [
  { key: "name", required: true, headers: ["اسم السائق", "name"] },
  { key: "nationalId", required: true, headers: ["رقم الهوية / الإقامة", "رقم الهوية", "national id", "nationalId"] },
  { key: "phone", required: true, headers: ["رقم الجوال", "الجوال", "phone", "mobile"] },
  { key: "passportNumber", required: true, headers: ["رقم جواز السفر", "جواز السفر", "passport number", "passportNumber"] }
];
const TRUCK_IMPORT_COLUMNS = [
  { key: "fleetNumber", required: true, headers: ["رقم الأسطول", "fleet number", "fleetNumber"] },
  { key: "plateNumber", required: true, headers: ["رقم السيارة (حروف وأرقام)", "رقم السيارة", "رقم اللوحة", "plate number", "plateNumber"] },
  { key: "serialNumber", required: true, headers: ["الرقم التسلسلي", "رقم الهيكل", "serial number", "serialNumber"] },
  { key: "model", required: true, headers: ["الموديل", "model"] },
  { key: "driverNationalId", required: false, headers: ["رقم هوية السائق (اختياري)", "رقم هوية السائق", "driver national id", "driverNationalId"] }
];
const driverImportRowSchema = z.object({
  name: z.string().trim().min(1).max(120),
  nationalId: z.string().trim().min(1).max(32),
  phone: z.string().trim().min(1).max(32),
  passportNumber: z.string().trim().min(1).max(64)
});
const truckImportRowSchema = z.object({
  fleetNumber: z.string().trim().min(1).max(32),
  plateNumber: z.string().trim().min(1).max(32),
  serialNumber: z.string().trim().min(1).max(64),
  model: z.string().trim().min(1).max(80),
  driverNationalId: z.string().trim().max(32).optional().default("")
});
const attachmentMetadataSelect = {
  id: true,
  originalName: true,
  contentType: true,
  size: true
};
const tripInclude = {
  truck: true,
  driver: true,
  customer: true,
  port: true,
  container: true,
  customsClearance: { include: { attachments: { select: attachmentMetadataSelect } } },
  transportDocument: { include: { attachments: { select: attachmentMetadataSelect } } },
  stageUpdates: { orderBy: { completedAt: "asc" } }
};
const tripExpenseInclude = {
  attachments: { select: attachmentMetadataSelect },
  trip: {
    include: {
      truck: { select: { plateNumber: true } },
      driver: { select: { name: true, nationalId: true } },
      container: { select: { containerNumber: true } },
      customsClearance: { select: { declarationNumber: true } },
      transportDocument: { select: { documentNumber: true } }
    }
  }
};

function normalizedUsername(value) {
  return value.trim().toLocaleLowerCase("en");
}

function importFailure(code, statusCode = 400, details) {
  return Object.assign(new Error(code), { publicCode: code, statusCode, details });
}

function normalizedImportHeader(value) {
  return String(value || "").trim().toLocaleLowerCase("en").replace(/[\s_/\-()]+/g, "");
}

function importCellText(cell) {
  const value = cell.value;
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (value && typeof value === "object" && Array.isArray(value.richText)) {
    return value.richText.map(part => part.text || "").join("").trim();
  }
  return "";
}

function readImportRows(worksheet, columns, rowSchema) {
  if (worksheet.rowCount > MAX_IMPORT_ROWS + 1) {
    throw importFailure("import_row_limit_exceeded", 413);
  }
  const headerRow = worksheet.getRow(1);
  const headers = new Map();
  headerRow.eachCell((cell, columnNumber) => {
    headers.set(normalizedImportHeader(importCellText(cell)), columnNumber);
  });
  const columnNumbers = new Map();
  const missingHeaders = [];
  for (const column of columns) {
    const columnNumber = column.headers
      .map(normalizedImportHeader)
      .map(header => headers.get(header))
      .find(Boolean);
    if (columnNumber) columnNumbers.set(column.key, columnNumber);
    else if (column.required) missingHeaders.push(column.key);
  }
  if (missingHeaders.length) throw importFailure("invalid_import_headers", 400);

  const rows = [];
  const errors = [];
  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    const data = {};
    for (const column of columns) {
      const columnNumber = columnNumbers.get(column.key);
      data[column.key] = columnNumber ? importCellText(worksheet.getRow(rowNumber).getCell(columnNumber)) : "";
    }
    if (Object.values(data).every(value => !value)) continue;
    const parsed = rowSchema.safeParse(data);
    if (!parsed.success) errors.push({ row: rowNumber, code: "invalid_row" });
    else rows.push({ row: rowNumber, data: parsed.data });
  }
  if (errors.length) throw importFailure("import_validation_failed", 422, errors);
  if (!rows.length) throw importFailure("import_empty", 400);
  return rows;
}

async function loadImportWorkbook(body, columns, rowSchema) {
  const input = z.object({
    fileName: z.string().trim().min(1).max(255).regex(/\.xlsx$/i),
    data: z.string().min(1).regex(/^[A-Za-z0-9+/]+={0,2}$/)
  }).safeParse(body);
  if (!input.success || input.data.data.length % 4 !== 0) throw importFailure("invalid_excel_file", 400);
  if (input.data.data.length > Math.ceil(MAX_IMPORT_FILE_BYTES / 3) * 4 + 4) {
    throw importFailure("import_file_too_large", 413);
  }
  const buffer = Buffer.from(input.data.data, "base64");
  if (!buffer.length || buffer.length > MAX_IMPORT_FILE_BYTES) throw importFailure("import_file_too_large", 413);

  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.load(buffer);
  } catch {
    throw importFailure("invalid_excel_file", 400);
  }
  const worksheet = workbook.worksheets[0];
  if (!worksheet) throw importFailure("invalid_excel_file", 400);
  return readImportRows(worksheet, columns, rowSchema);
}

function findDuplicateImportRows(rows, keys) {
  const seen = new Map();
  const errors = [];
  for (const row of rows) {
    for (const key of keys) {
      const value = String(row.data[key] || "").trim().toLocaleLowerCase("en");
      if (!value) continue;
      const identity = `${key}:${value}`;
      if (seen.has(identity)) errors.push({ row: row.row, code: "duplicate_in_file" });
      else seen.set(identity, row.row);
    }
  }
  return errors;
}

function mapClearance(clearance) {
  return {
    id: clearance.id,
    declarationNumber: clearance.declarationNumber,
    containerNumber: clearance.container.containerNumber,
    size: clearance.container.size === "FT_20" ? "20 قدم" : "40 قدم",
    type: clearance.container.type,
    sealNumber: clearance.shippingSealNumber,
    vesselName: clearance.vesselName,
    port: clearance.port.name,
    source: clearance.source,
    status: clearance.status,
    clearedAt: clearance.clearedAt?.toISOString().slice(0, 10) || null,
    attachments: (clearance.attachments || []).map(attachmentMetadata)
  };
}

function mapTrip(trip) {
  const completed = Boolean(trip.emptyReturnedAt);
  const stageIndex = trip.currentStage ? tripStages.indexOf(trip.currentStage) : -1;
  return {
    id: trip.transportDocument?.id || trip.id,
    tripId: trip.id,
    documentNumber: trip.transportDocument?.documentNumber || null,
    status: trip.transportDocument?.status || "DRAFT",
    source: trip.transportDocument?.source || "INTERNAL_DRAFT",
    issuedAt: trip.transportDocument?.issuedAt?.toISOString().slice(0, 10) ||
      trip.operationAt.toISOString().slice(0, 10),
    clearanceId: trip.customsClearanceId,
    declarationNumber: trip.customsClearance.declarationNumber,
    containerNumber: trip.container.containerNumber,
    size: trip.container.size === "FT_20" ? "20 قدم" : "40 قدم",
    type: trip.container.type,
    sealNumber: trip.customsClearance.shippingSealNumber,
    vesselName: trip.customsClearance.vesselName,
    port: trip.port.name,
    customerName: trip.customer.name,
    truckId: trip.truckId,
    driverId: trip.driverId,
    destination: trip.deliveryDestination,
    returnDueAt: trip.emptyReturnDueAt?.toISOString().slice(0, 10) || "",
    freeTimeEndsAt: trip.freeTimeEndsAt?.toISOString().slice(0, 10) || "",
    requestStatus: trip.driverAcceptedAt ? "ACCEPTED" : "PENDING",
    acceptedAt: trip.driverAcceptedAt?.toISOString() || "",
    tripStageIndex: completed ? tripStages.length - 1 : trip.driverAcceptedAt ? Math.max(0, stageIndex) : -1,
    stageHistory: trip.stageUpdates.map(update => ({
      stage: update.stage,
      completedAt: update.completedAt.toISOString()
    })),
    returnedAt: trip.emptyReturnedAt?.toISOString().slice(0, 10) || "",
    eir: trip.eirReceiptNumber || "",
    clearanceAttachments: (trip.customsClearance.attachments || []).map(attachmentMetadata),
    attachments: (trip.transportDocument?.attachments || []).map(attachmentMetadata)
  };
}

function mapTripExpense(expense) {
  return {
    id: expense.id,
    tripId: expense.tripId,
    amount: expense.amount.toString(),
    type: expense.type,
    notes: expense.notes || "",
    createdAt: expense.createdAt.toISOString(),
    attachments: (expense.attachments || []).map(attachmentMetadata),
    driverId: expense.trip.driverId,
    driverName: expense.trip.driver.name,
    nationalId: expense.trip.driver.nationalId,
    plateNumber: expense.trip.truck.plateNumber,
    containerNumber: expense.trip.container.containerNumber,
    declarationNumber: expense.trip.customsClearance.declarationNumber,
    documentNumber: expense.trip.transportDocument?.documentNumber || null
  };
}

function stateTruck(truck) {
  return {
    id: truck.id,
    fleetNumber: truck.fleetNumber,
    plateNumber: truck.plateNumber,
    serialNumber: truck.serialNumber,
    model: truck.model,
    status: truck.status,
    driverId: truck.assignedDriverId || "",
    deletedAt: truck.deletedAt?.toISOString() || null
  };
}

function stateDriver(driver) {
  return {
    id: driver.id,
    name: driver.name,
    nationalId: driver.nationalId,
    phone: driver.phone,
    passportNumber: driver.passportNumber,
    isActive: driver.isActive,
    deletedAt: driver.deletedAt?.toISOString() || null
  };
}

async function writeAudit(tx, req, action, entityType, entityId, metadata) {
  await tx.auditLog.create({
    data: {
      actorId: req.user.id,
      action,
      entityType,
      entityId,
      metadata
    }
  });
}

async function getAppState(req) {
  const isDriver = req.user.role === "DRIVER";
  const driverId = isDriver ? req.user.driverId : undefined;
  const [trucks, drivers, clearances, trips, accounts, ports, tripExpenses] = await Promise.all([
    prisma.truck.findMany({
      where: isDriver
        ? { trips: { some: { driverId } } }
        : {},
      orderBy: { fleetNumber: "asc" }
    }),
    prisma.driver.findMany({
      where: isDriver ? { id: driverId } : {},
      orderBy: { name: "asc" }
    }),
    prisma.customsClearance.findMany({
      where: isDriver ? { trip: { driverId } } : {},
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } },
      orderBy: { createdAt: "desc" }
    }),
    prisma.trip.findMany({
      where: isDriver ? { driverId } : {},
      include: tripInclude,
      orderBy: { operationAt: "desc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.user.findMany({
      where: { deletedAt: null },
      select: {
        id: true,
        username: true,
        role: true,
        driverId: true,
        createdAt: true,
        deletedAt: true
      },
      orderBy: { createdAt: "asc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.port.findMany({ orderBy: { name: "asc" } }),
    prisma.tripExpense.findMany({
      where: isDriver ? { trip: { is: { driverId } } } : {},
      include: tripExpenseInclude,
      orderBy: { createdAt: "desc" }
    })
  ]);
  return {
    trucks: trucks.map(stateTruck),
    drivers: drivers.map(stateDriver),
    clearances: clearances.map(mapClearance),
    docs: trips.map(mapTrip),
    tripExpenses: tripExpenses.map(mapTripExpense),
    accounts: accounts.map(account => ({ ...account, createdAt: account.createdAt.toISOString() })),
    ports
  };
}

router.get("/app-state", async (req, res) => {
  res.json(await getAppState(req));
});

router.get("/fasah/lookup", requireAdmin, async (req, res) => {
  const query = z.string().trim().min(1).max(100).safeParse(req.query.q);
  if (!query.success) return res.status(400).json({ error: "invalid_search_query" });

  const clearances = await prisma.customsClearance.findMany({
    where: {
      OR: [
        { declarationNumber: { contains: query.data, mode: "insensitive" } },
        { container: { containerNumber: { contains: query.data, mode: "insensitive" } } }
      ]
    },
    include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } },
    orderBy: { createdAt: "desc" },
    take: 50
  });
  res.json({ clearances: clearances.map(mapClearance) });
});

router.get("/import-templates/:type", requireAdmin, async (req, res) => {
  const type = req.params.type;
  const columns = type === "drivers" ? DRIVER_IMPORT_COLUMNS
    : type === "trucks" ? TRUCK_IMPORT_COLUMNS
      : null;
  if (!columns) return res.status(404).json({ error: "record_not_found" });

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "North World Transport Management";
  const worksheet = workbook.addWorksheet(type === "drivers" ? "السائقون" : "السيارات");
  worksheet.views = [{ rightToLeft: true }];
  worksheet.columns = columns.map(column => ({
    header: column.headers[0],
    key: column.key,
    width: column.key === "name" ? 28 : 24,
    style: { numFmt: "@" }
  }));
  worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  worksheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF173B5E" } };
  const instructions = workbook.addWorksheet("تعليمات");
  instructions.views = [{ rightToLeft: true }];
  instructions.getColumn(1).width = 95;
  instructions.addRows([
    ["استخدم الورقة الأولى لإدخال البيانات، واترك صف العناوين كما هو."],
    ["ارفع ملف بصيغة .xlsx، والحد الأقصى 500 صف و3 MB."],
    ...(type === "drivers"
      ? [["جميع حقول السائق مطلوبة. يجب أن يكون رقم الهوية ورقم جواز السفر غير مستخدمين مسبقاً."]]
      : [["رقم هوية السائق اختياري؛ عند إدخاله يجب أن يطابق هوية سائق نشط مسجل بالنظام."],
        ["يجب أن تكون أرقام الأسطول واللوحات والأرقام التسلسلية فريدة."]])
  ]);
  const buffer = Buffer.from(await workbook.xlsx.writeBuffer());
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", `attachment; filename="north-world-${type}-template.xlsx"`);
  res.setHeader("Content-Length", buffer.length);
  res.send(buffer);
});

router.post("/drivers/import", requireAdmin, async (req, res) => {
  const rows = await loadImportWorkbook(req.body, DRIVER_IMPORT_COLUMNS, driverImportRowSchema);
  const fileDuplicates = findDuplicateImportRows(rows, ["nationalId", "passportNumber"]);
  if (fileDuplicates.length) throw importFailure("import_conflict", 409, fileDuplicates);

  await prisma.$transaction(async tx => {
    const existing = await tx.driver.findMany({
      where: {
        OR: [
          { nationalId: { in: rows.map(row => row.data.nationalId) } },
          { passportNumber: { in: rows.map(row => row.data.passportNumber) } }
        ]
      },
      select: { nationalId: true, passportNumber: true }
    });
    const existingNationalIds = new Set(existing.map(driver => driver.nationalId));
    const existingPassports = new Set(existing.map(driver => driver.passportNumber).filter(Boolean));
    const conflicts = rows
      .filter(row => existingNationalIds.has(row.data.nationalId) || existingPassports.has(row.data.passportNumber))
      .map(row => ({ row: row.row, code: "already_exists" }));
    if (conflicts.length) throw importFailure("import_conflict", 409, conflicts);

    for (const row of rows) {
      const driver = await tx.driver.create({ data: row.data });
      await writeAudit(tx, req, "driver.imported", "Driver", driver.id, { row: row.row });
    }
  });
  res.status(201).json({ imported: rows.length });
});

router.post("/trucks/import", requireAdmin, async (req, res) => {
  const rows = await loadImportWorkbook(req.body, TRUCK_IMPORT_COLUMNS, truckImportRowSchema);
  const fileDuplicates = findDuplicateImportRows(rows, ["fleetNumber", "plateNumber", "serialNumber"]);
  if (fileDuplicates.length) throw importFailure("import_conflict", 409, fileDuplicates);

  await prisma.$transaction(async tx => {
    const existingTrucks = await tx.truck.findMany({
      where: {
        OR: [
          { fleetNumber: { in: rows.map(row => row.data.fleetNumber) } },
          { plateNumber: { in: rows.map(row => row.data.plateNumber) } },
          { serialNumber: { in: rows.map(row => row.data.serialNumber) } }
        ]
      },
      select: { fleetNumber: true, plateNumber: true, serialNumber: true }
    });
    const existingFleetNumbers = new Set(existingTrucks.map(truck => truck.fleetNumber));
    const existingPlates = new Set(existingTrucks.map(truck => truck.plateNumber));
    const existingSerialNumbers = new Set(existingTrucks.map(truck => truck.serialNumber));
    const conflicts = rows
      .filter(row => existingFleetNumbers.has(row.data.fleetNumber) ||
        existingPlates.has(row.data.plateNumber) ||
        existingSerialNumbers.has(row.data.serialNumber))
      .map(row => ({ row: row.row, code: "already_exists" }));

    const driverNationalIds = [...new Set(rows.map(row => row.data.driverNationalId).filter(Boolean))];
    const drivers = driverNationalIds.length ? await tx.driver.findMany({
      where: { nationalId: { in: driverNationalIds }, isActive: true, deletedAt: null },
      select: { id: true, nationalId: true }
    }) : [];
    const driverIds = new Map(drivers.map(driver => [driver.nationalId, driver.id]));
    for (const row of rows) {
      if (row.data.driverNationalId && !driverIds.has(row.data.driverNationalId)) {
        conflicts.push({ row: row.row, code: "driver_not_found" });
      }
    }
    if (conflicts.length) throw importFailure("import_conflict", 409, conflicts);

    for (const row of rows) {
      const truck = await tx.truck.create({
        data: {
          fleetNumber: row.data.fleetNumber,
          plateNumber: row.data.plateNumber,
          serialNumber: row.data.serialNumber,
          model: row.data.model,
          assignedDriverId: driverIds.get(row.data.driverNationalId) || null
        }
      });
      await writeAudit(tx, req, "truck.imported", "Truck", truck.id, { row: row.row });
    }
  });
  res.status(201).json({ imported: rows.length });
});

router.post("/clearances/manual", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  const parsed = manualClearanceSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_manual_clearance_input" });

  const clearance = await prisma.$transaction(async tx => {
    const port = await tx.port.upsert({
      where: { name: parsed.data.portName },
      create: { name: parsed.data.portName, city: parsed.data.portCity },
      update: { city: parsed.data.portCity }
    });
    let container = await tx.container.findUnique({
      where: { containerNumber: parsed.data.containerNumber }
    });
    if (container && (container.size !== parsed.data.size || container.type !== parsed.data.type)) {
      throw Object.assign(new Error("container_details_conflict"), {
        statusCode: 409,
        publicCode: "container_details_conflict"
      });
    }
    if (!container) {
      container = await tx.container.create({
        data: {
          containerNumber: parsed.data.containerNumber,
          size: parsed.data.size,
          type: parsed.data.type
        }
      });
    }
    const created = await tx.customsClearance.create({
      data: {
        declarationNumber: parsed.data.declarationNumber,
        status: parsed.data.status,
        clearedAt: parsed.data.clearedAt
          ? new Date(`${parsed.data.clearedAt}T00:00:00.000Z`)
          : null,
        vesselName: parsed.data.vesselName || null,
        shippingSealNumber: parsed.data.sealNumber || null,
        containerId: container.id,
        portId: port.id,
        ...(attachments.length ? {
          attachments: { create: attachments }
        } : {})
      },
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } }
    });
    await writeAudit(tx, req, "clearance.manually_created", "CustomsClearance", created.id, {
      declarationNumber: created.declarationNumber,
      containerNumber: container.containerNumber,
      status: created.status,
      attachmentCount: attachments.length
    });
    return created;
  });
  res.status(201).json(mapClearance(clearance));
});

router.post("/trucks", requireAdmin, async (req, res) => {
  const schema = z.object({
    fleetNumber: z.string().trim().min(1).max(32),
    plateNumber: z.string().trim().min(1).max(32),
    serialNumber: z.string().trim().min(1).max(64),
    model: z.string().trim().min(1).max(80),
    driverId: z.string().min(1)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_input" });
  const { driverId, ...truckData } = parsed.data;
  const driver = await prisma.driver.findFirst({
    where: { id: driverId, isActive: true, deletedAt: null }
  });
  if (!driver) return res.status(400).json({ error: "active_driver_required" });

  const truck = await prisma.$transaction(async tx => {
    const created = await tx.truck.create({
      data: { ...truckData, assignedDriverId: driver.id }
    });
    await writeAudit(tx, req, "truck.created", "Truck", created.id);
    return created;
  });
  res.status(201).json(stateTruck(truck));
});

router.patch("/trucks/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    fleetNumber: z.string().trim().min(1).max(32).optional(),
    plateNumber: z.string().trim().min(1).max(32).optional(),
    serialNumber: z.string().trim().min(1).max(64).optional(),
    model: z.string().trim().min(1).max(80).optional(),
    status: z.enum(truckStatuses).optional(),
    driverId: z.string().nullable().optional()
  }).refine(value => Object.keys(value).length > 0);
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_update" });

  const truck = await prisma.$transaction(async tx => {
    const current = await tx.truck.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.deletedAt) {
      throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
    }
    const identityFields = ["fleetNumber", "plateNumber", "serialNumber"];
    if (identityFields.some(field => parsed.data[field] !== undefined)) {
      const duplicate = await tx.truck.findFirst({
        where: {
          id: { not: current.id },
          OR: identityFields
            .filter(field => parsed.data[field] !== undefined)
            .map(field => ({ [field]: parsed.data[field] }))
        },
        select: { id: true }
      });
      if (duplicate) {
        throw Object.assign(new Error("truck_details_conflict"), { statusCode: 409, publicCode: "truck_details_conflict" });
      }
    }
    const activeTrip = await tx.trip.findFirst({
      where: { truckId: current.id, ...ACTIVE_TRIP_FILTER },
      select: { id: true }
    });
    if (activeTrip && (parsed.data.status && parsed.data.status !== current.status ||
        parsed.data.driverId !== undefined && parsed.data.driverId !== current.assignedDriverId)) {
      throw Object.assign(new Error("truck_has_active_trip"), { statusCode: 409, publicCode: "truck_has_active_trip" });
    }

    let assignedDriverId = current.assignedDriverId;
    if (parsed.data.driverId !== undefined) {
      if (parsed.data.driverId === null || parsed.data.driverId === "") {
        assignedDriverId = null;
      } else {
        const driver = await tx.driver.findFirst({
          where: { id: parsed.data.driverId, isActive: true, deletedAt: null }
        });
        if (!driver) throw Object.assign(new Error("active_driver_required"), { statusCode: 400, publicCode: "active_driver_required" });
        assignedDriverId = driver.id;
      }
    }
    const updated = await tx.truck.update({
      where: { id: current.id },
      data: {
        ...(parsed.data.fleetNumber !== undefined ? { fleetNumber: parsed.data.fleetNumber } : {}),
        ...(parsed.data.plateNumber !== undefined ? { plateNumber: parsed.data.plateNumber } : {}),
        ...(parsed.data.serialNumber !== undefined ? { serialNumber: parsed.data.serialNumber } : {}),
        ...(parsed.data.model !== undefined ? { model: parsed.data.model } : {}),
        ...(parsed.data.status ? { status: parsed.data.status } : {}),
        ...(parsed.data.driverId !== undefined ? { assignedDriverId } : {})
      }
    });
    await writeAudit(tx, req, "truck.updated", "Truck", updated.id, parsed.data);
    return updated;
  });
  res.json(stateTruck(truck));
});

async function softDeleteTruck(req, truckId, tx = prisma) {
  const truck = await tx.truck.findUniqueOrThrow({ where: { id: truckId } });
  const activeTrip = await tx.trip.findFirst({ where: { truckId, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
  if (activeTrip) throw Object.assign(new Error("truck_has_active_trip"), { statusCode: 409, publicCode: "truck_has_active_trip" });
  return tx.truck.update({
    where: { id: truck.id },
    data: { deletedAt: new Date(), status: "INACTIVE", assignedDriverId: null }
  });
}

router.delete("/trucks/:id", requireAdmin, async (req, res) => {
  const truck = await prisma.$transaction(async tx => {
    const deleted = await softDeleteTruck(req, req.params.id, tx);
    await writeAudit(tx, req, "truck.deleted", "Truck", deleted.id);
    return deleted;
  });
  res.json(stateTruck(truck));
});

router.post("/trucks/bulk-delete", requireAdmin, async (req, res) => {
  const parsed = z.object({ ids: z.array(z.string()).min(1).max(200) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_ids" });
  const result = await prisma.$transaction(async tx => {
    const deleted = [];
    const blocked = [];
    for (const id of new Set(parsed.data.ids)) {
      const activeTrip = await tx.trip.findFirst({ where: { truckId: id, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
      if (activeTrip) {
        blocked.push(id);
        continue;
      }
      const truck = await tx.truck.findUnique({ where: { id } });
      if (!truck || truck.deletedAt) continue;
      const updated = await softDeleteTruck(req, id, tx);
      deleted.push(updated.id);
      await writeAudit(tx, req, "truck.deleted", "Truck", updated.id);
    }
    return { deleted, blocked };
  });
  res.json(result);
});

router.post("/drivers", requireAdmin, async (req, res) => {
  const schema = z.object({
    name: z.string().trim().min(1).max(120),
    nationalId: z.string().trim().min(1).max(32),
    phone: z.string().trim().min(1).max(32),
    passportNumber: z.string().trim().min(1).max(64)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_input" });

  const driver = await prisma.$transaction(async tx => {
    const created = await tx.driver.create({ data: parsed.data });
    await writeAudit(tx, req, "driver.created", "Driver", created.id);
    return created;
  });
  res.status(201).json(stateDriver(driver));
});

router.patch("/drivers/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    name: z.string().trim().min(1).max(120),
    nationalId: z.string().trim().min(1).max(32),
    phone: z.string().trim().min(1).max(32),
    passportNumber: z.string().trim().min(1).max(64)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_input" });

  const driver = await prisma.$transaction(async tx => {
    const current = await tx.driver.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.deletedAt) {
      throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
    }
    const duplicate = await tx.driver.findFirst({
      where: {
        id: { not: current.id },
        OR: [
          { nationalId: parsed.data.nationalId },
          { passportNumber: parsed.data.passportNumber }
        ]
      },
      select: { id: true }
    });
    if (duplicate) {
      throw Object.assign(new Error("driver_details_conflict"), { statusCode: 409, publicCode: "driver_details_conflict" });
    }
    const updated = await tx.driver.update({ where: { id: current.id }, data: parsed.data });
    await writeAudit(tx, req, "driver.updated", "Driver", updated.id);
    return updated;
  });
  res.json(stateDriver(driver));
});

async function softDeleteDriver(req, driverId, tx = prisma) {
  const driver = await tx.driver.findUniqueOrThrow({ where: { id: driverId } });
  const activeTrip = await tx.trip.findFirst({ where: { driverId, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
  if (activeTrip) throw Object.assign(new Error("driver_has_active_trip"), { statusCode: 409, publicCode: "driver_has_active_trip" });

  await tx.truck.updateMany({ where: { assignedDriverId: driverId }, data: { assignedDriverId: null } });
  await tx.user.updateMany({ where: { driverId }, data: { isActive: false } });
  await tx.session.deleteMany({ where: { user: { driverId } } });
  return tx.driver.update({ where: { id: driverId }, data: { deletedAt: new Date(), isActive: false } });
}

router.delete("/drivers/:id", requireAdmin, async (req, res) => {
  const driver = await prisma.$transaction(async tx => {
    const deleted = await softDeleteDriver(req, req.params.id, tx);
    await writeAudit(tx, req, "driver.deleted", "Driver", deleted.id);
    return deleted;
  });
  res.json(stateDriver(driver));
});

router.post("/drivers/bulk-delete", requireAdmin, async (req, res) => {
  const parsed = z.object({ ids: z.array(z.string()).min(1).max(200) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_ids" });
  const result = await prisma.$transaction(async tx => {
    const deleted = [];
    const blocked = [];
    for (const id of new Set(parsed.data.ids)) {
      const activeTrip = await tx.trip.findFirst({ where: { driverId: id, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
      if (activeTrip) {
        blocked.push(id);
        continue;
      }
      const driver = await tx.driver.findUnique({ where: { id } });
      if (!driver || driver.deletedAt) continue;
      const updated = await softDeleteDriver(req, id, tx);
      deleted.push(updated.id);
      await writeAudit(tx, req, "driver.deleted", "Driver", updated.id);
    }
    return { deleted, blocked };
  });
  res.json(result);
});

router.post("/accounts", requireAdmin, async (req, res) => {
  const schema = z.object({
    username: z.string().trim().min(3).max(64),
    password: z.string().min(12).max(128),
    role: z.enum(["ADMIN", "DRIVER"]),
    driverId: z.string().optional().default("")
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_account_input" });

  const username = normalizedUsername(parsed.data.username);
  if (parsed.data.role === "DRIVER" && !parsed.data.driverId) {
    return res.status(400).json({ error: "active_driver_required" });
  }
  if (parsed.data.role === "ADMIN" && parsed.data.driverId) {
    return res.status(400).json({ error: "admin_must_not_link_driver" });
  }
  if (parsed.data.driverId) {
    const driver = await prisma.driver.findFirst({
      where: { id: parsed.data.driverId, isActive: true, deletedAt: null, user: null }
    });
    if (!driver) return res.status(409).json({ error: "driver_account_unavailable" });
  }
  const passwordHash = await hashPassword(parsed.data.password);
  const account = await prisma.$transaction(async tx => {
    const created = await tx.user.create({
      data: {
        username,
        passwordHash,
        role: parsed.data.role,
        driverId: parsed.data.role === "DRIVER" ? parsed.data.driverId : null
      },
      select: { id: true, username: true, role: true, driverId: true, createdAt: true, deletedAt: true }
    });
    await writeAudit(tx, req, "account.created", "User", created.id, { role: created.role });
    return created;
  });
  res.status(201).json({ ...account, createdAt: account.createdAt.toISOString() });
});

router.patch("/accounts/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    username: z.string().trim().min(3).max(64),
    role: z.enum(["ADMIN", "DRIVER"]),
    driverId: z.string().optional().default(""),
    password: z.string().min(12).max(128).optional()
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_account_input" });

  const current = await prisma.user.findUniqueOrThrow({ where: { id: req.params.id } });
  if (current.deletedAt) return res.status(404).json({ error: "record_not_found" });
  if (current.role === "ADMIN" && parsed.data.role !== "ADMIN") {
    const adminCount = await prisma.user.count({ where: { role: "ADMIN", isActive: true, deletedAt: null } });
    if (adminCount <= 1) return res.status(409).json({ error: "last_admin_required" });
  }
  if (parsed.data.role === "DRIVER" && !parsed.data.driverId) {
    return res.status(400).json({ error: "active_driver_required" });
  }
  if (parsed.data.role === "ADMIN" && parsed.data.driverId) {
    return res.status(400).json({ error: "admin_must_not_link_driver" });
  }
  if (parsed.data.driverId) {
    const driver = await prisma.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { id: { not: current.id } } }
      }
    });
    if (!driver) return res.status(409).json({ error: "driver_account_unavailable" });
  }

  const account = await prisma.$transaction(async tx => {
    const updated = await tx.user.update({
      where: { id: current.id },
      data: {
        username: normalizedUsername(parsed.data.username),
        role: parsed.data.role,
        driverId: parsed.data.role === "DRIVER" ? parsed.data.driverId : null,
        ...(parsed.data.password ? { passwordHash: await hashPassword(parsed.data.password) } : {})
      },
      select: { id: true, username: true, role: true, driverId: true, createdAt: true, deletedAt: true }
    });
    await tx.session.deleteMany({ where: { userId: current.id } });
    await writeAudit(tx, req, "account.updated", "User", updated.id, { role: updated.role });
    return updated;
  });
  res.json({ ...account, createdAt: account.createdAt.toISOString() });
});

router.post("/trips", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  const schema = z.object({
    clearanceId: z.string().min(1),
    truckId: z.string().min(1),
    driverId: z.string().min(1),
    customerName: z.string().trim().min(1).max(160),
    destination: z.string().trim().min(1).max(240),
    returnDueAt: z.string().date().optional().or(z.literal("")),
    ...manualDocumentReferenceFields
  }).refine(hasCompleteManualDocumentReference, {
    path: ["manualDocumentDate"],
    message: "manual_document_date_must_match_number"
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_input" });

  const trip = await prisma.$transaction(async tx => {
    const clearance = await tx.customsClearance.findUnique({
      where: { id: parsed.data.clearanceId },
      include: { container: true, port: true, trip: true }
    });
    if (!clearance || clearance.status !== "CLEARED" || clearance.trip) {
      throw Object.assign(new Error("clearance_unavailable"), { statusCode: 409, publicCode: "clearance_unavailable" });
    }
    const truck = await tx.truck.findFirst({
      where: { id: parsed.data.truckId, status: "AVAILABLE", deletedAt: null }
    });
    if (!truck) throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });
    const driver = await tx.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { role: "DRIVER", isActive: true, deletedAt: null } }
      }
    });
    if (!driver) throw Object.assign(new Error("driver_account_required"), { statusCode: 409, publicCode: "driver_account_required" });

    const customer = await tx.customer.upsert({
      where: { name: parsed.data.customerName },
      create: { name: parsed.data.customerName },
      update: {}
    });
    const created = await tx.trip.create({
      data: {
        deliveryDestination: parsed.data.destination,
        emptyReturnDueAt: parsed.data.returnDueAt ? new Date(`${parsed.data.returnDueAt}T00:00:00.000Z`) : null,
        truckId: truck.id,
        driverId: driver.id,
        customerId: customer.id,
        portId: clearance.portId,
        containerId: clearance.containerId,
        customsClearanceId: clearance.id,
        transportDocument: {
          create: {
            documentNumber: parsed.data.manualDocumentNumber || null,
            status: parsed.data.manualDocumentNumber ? "ISSUED" : "DRAFT",
            source: parsed.data.manualDocumentNumber ? "MANUAL_ENTRY" : "INTERNAL_DRAFT",
            issuedAt: parsed.data.manualDocumentDate
              ? new Date(`${parsed.data.manualDocumentDate}T00:00:00.000Z`)
              : null,
            ...(attachments.length ? {
              attachments: { create: attachments }
            } : {})
          }
        }
      },
      include: tripInclude
    });
    await tx.truck.update({
      where: { id: truck.id },
      data: { status: "ASSIGNED", assignedDriverId: driver.id }
    });
    await writeAudit(tx, req, "trip.created", "Trip", created.id, {
      clearanceId: clearance.id,
      attachmentCount: attachments.length
    });
    return created;
  }, { isolationLevel: "Serializable" });
  res.status(201).json(mapTrip(trip));
});

router.post("/trip-expenses", async (req, res) => {
  if (req.user.role !== "DRIVER" || !req.user.driverId) {
    return res.status(403).json({ error: "driver_only" });
  }
  const attachments = parseManualAttachments(req.body?.attachments);
  const schema = z.object({
    tripId: z.string().trim().min(1),
    amount: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).refine(value => Number(value) > 0),
    type: z.enum(["MAINTENANCE", "FUEL"]),
    notes: z.string().trim().max(500).optional().default("")
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_expense" });

  const expense = await prisma.$transaction(async tx => {
    const trip = await tx.trip.findFirst({
      where: {
        id: parsed.data.tripId,
        driverId: req.user.driverId,
        driverAcceptedAt: { not: null }
      },
      select: { id: true }
    });
    if (!trip) {
      throw Object.assign(new Error("expense_trip_unavailable"), {
        statusCode: 404,
        publicCode: "expense_trip_unavailable"
      });
    }

    const created = await tx.tripExpense.create({
      data: {
        tripId: trip.id,
        amount: parsed.data.amount,
        type: parsed.data.type,
        notes: parsed.data.notes || null,
        ...(attachments.length ? { attachments: { create: attachments } } : {})
      },
      include: tripExpenseInclude
    });
    await writeAudit(tx, req, "trip_expense.created", "TripExpense", created.id, {
      tripId: trip.id,
      amount: parsed.data.amount,
      type: parsed.data.type
    });
    return created;
  });
  res.status(201).json(mapTripExpense(expense));
});

router.get("/attachments/:id", async (req, res) => {
  const attachment = await prisma.operationAttachment.findUnique({
    where: { id: req.params.id },
    include: {
      clearance: { select: { trip: { select: { driverId: true } } } },
      transportDocument: { select: { trip: { select: { driverId: true } } } },
      tripExpense: { select: { trip: { select: { driverId: true } } } }
    }
  });
  if (!attachment) return res.status(404).json({ error: "record_not_found" });

  const allowedDriverIds = [
    attachment.clearance?.trip?.driverId,
    attachment.transportDocument?.trip?.driverId,
    attachment.tripExpense?.trip?.driverId
  ];
  if (req.user.role !== "ADMIN" && !allowedDriverIds.includes(req.user.driverId)) {
    return res.status(403).json({ error: "attachment_access_denied" });
  }

  const fallbackName = attachment.contentType === "application/pdf" ? "document.pdf"
    : attachment.contentType === "image/png" ? "document.png" : "document.jpg";
  const filename = attachment.originalName || fallbackName;
  const encodedFilename = encodeURIComponent(filename)
    .replace(/[!'()*]/g, character => `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
  res.setHeader("Content-Type", attachment.contentType);
  res.setHeader("Content-Length", attachment.size);
  res.setHeader("Content-Disposition", `attachment; filename="${fallbackName}"; filename*=UTF-8''${encodedFilename}`);
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.send(Buffer.from(attachment.data));
});

router.post("/trips/:id/accept", async (req, res) => {
  if (req.user.role !== "DRIVER") return res.status(403).json({ error: "driver_required" });
  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.driverId !== req.user.driverId || current.driverAcceptedAt || current.emptyReturnedAt) {
      throw Object.assign(new Error("trip_request_unavailable"), { statusCode: 409, publicCode: "trip_request_unavailable" });
    }
    const acceptedAt = new Date();
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: { driverAcceptedAt: acceptedAt, currentStage: "EN_ROUTE_TO_PORT" },
      include: tripInclude
    });
    await tx.truck.update({ where: { id: current.truckId }, data: { status: "ON_TRIP" } });
    await writeAudit(tx, req, "trip.accepted", "Trip", updated.id);
    return updated;
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.post("/trips/:id/advance", async (req, res) => {
  if (req.user.role !== "DRIVER") return res.status(403).json({ error: "driver_required" });
  const parsed = z.object({ eir: z.string().trim().max(80).optional().default("") }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_update" });

  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    const index = current.currentStage ? tripStages.indexOf(current.currentStage) : -1;
    if (current.driverId !== req.user.driverId || !current.driverAcceptedAt ||
        current.emptyReturnedAt || index < 0 || index >= tripStages.length - 1) {
      throw Object.assign(new Error("trip_stage_unavailable"), { statusCode: 409, publicCode: "trip_stage_unavailable" });
    }

    const completedStage = tripStages[index];
    const nextStage = tripStages[index + 1];
    const completedAt = new Date();
    await tx.tripStageUpdate.create({
      data: { tripId: current.id, stage: completedStage, completedAt }
    });
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: {
        currentStage: nextStage,
        ...(nextStage === "EMPTY_RETURNED" ? {
          emptyReturnedAt: completedAt,
          eirReceiptNumber: parsed.data.eir || null
        } : {})
      },
      include: tripInclude
    });
    if (nextStage === "EMPTY_RETURNED") {
      await tx.tripStageUpdate.create({
        data: { tripId: current.id, stage: "EMPTY_RETURNED", completedAt }
      });
      await tx.truck.update({ where: { id: current.truckId }, data: { status: "AVAILABLE" } });
    }
    await writeAudit(tx, req, "trip.stage.updated", "Trip", updated.id, { stage: nextStage });
    return tx.trip.findUniqueOrThrow({ where: { id: updated.id }, include: tripInclude });
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.post("/trips/:id/return", requireAdmin, async (req, res) => {
  const parsed = z.object({ eir: z.string().trim().max(80).optional().default("") }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_return" });
  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.emptyReturnedAt) throw Object.assign(new Error("trip_already_returned"), { statusCode: 409, publicCode: "trip_already_returned" });

    const completedAt = new Date();
    const existing = new Set((await tx.tripStageUpdate.findMany({
      where: { tripId: current.id },
      select: { stage: true }
    })).map(update => update.stage));
    for (const stage of tripStages) {
      if (!existing.has(stage)) {
        await tx.tripStageUpdate.create({ data: { tripId: current.id, stage, completedAt } });
      }
    }
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: {
        driverAcceptedAt: current.driverAcceptedAt || completedAt,
        currentStage: "EMPTY_RETURNED",
        emptyReturnedAt: completedAt,
        eirReceiptNumber: parsed.data.eir || null
      },
      include: tripInclude
    });
    await tx.truck.update({ where: { id: current.truckId }, data: { status: "AVAILABLE" } });
    await writeAudit(tx, req, "trip.returned", "Trip", updated.id);
    return updated;
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.get("/reports.xlsx", requireAdmin, async (req, res) => {
  const filtersSchema = z.object({
    from: z.string().date().optional(),
    to: z.string().date().optional(),
    port: z.string().trim().max(120).optional(),
    customer: z.string().trim().max(160).optional(),
    returnStatus: z.enum(["returned", "active", "overdue", "soon"]).optional()
  });
  const parsed = filtersSchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json({ error: "invalid_report_filters" });
  const filters = parsed.data;
  const where = {
    ...(filters.from || filters.to ? {
      operationAt: {
        ...(filters.from ? { gte: new Date(`${filters.from}T00:00:00.000Z`) } : {}),
        ...(filters.to ? { lte: new Date(`${filters.to}T23:59:59.999Z`) } : {})
      }
    } : {}),
    ...(filters.port ? { port: { name: filters.port } } : {}),
    ...(filters.customer ? { customer: { name: { contains: filters.customer, mode: "insensitive" } } } : {}),
    ...(filters.returnStatus === "returned" ? { emptyReturnedAt: { not: null } } : {}),
    ...(filters.returnStatus && filters.returnStatus !== "returned" ? { emptyReturnedAt: null } : {})
  };
  const trips = await prisma.trip.findMany({
    where,
    include: tripInclude,
    orderBy: { operationAt: "desc" }
  });
  const filtered = trips.filter(trip => {
    if (!filters.returnStatus || filters.returnStatus === "returned") return true;
    const freeTimeEndsAt = trip.freeTimeEndsAt || trip.emptyReturnDueAt;
    if (!freeTimeEndsAt) return filters.returnStatus === "active";
    const days = Math.ceil((freeTimeEndsAt.getTime() - Date.now()) / 86400000);
    if (filters.returnStatus === "overdue") return days < 0;
    if (filters.returnStatus === "soon") return days >= 0 && days <= 2;
    return days > 2;
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("تقرير العمليات", { views: [{ rightToLeft: true }] });
  sheet.columns = [
    { header: "تاريخ العملية", key: "operationAt", width: 18 },
    { header: "تاريخ الفسح", key: "clearedAt", width: 18 },
    { header: "الشركة المستلمة", key: "customer", width: 28 },
    { header: "اسم السائق", key: "driver", width: 24 },
    { header: "رقم الهوية / الإقامة", key: "nationalId", width: 22 },
    { header: "الجوال", key: "phone", width: 18 },
    { header: "رقم وثيقة بيان", key: "documentNumber", width: 24 },
    { header: "حالة الوثيقة", key: "documentStatus", width: 18 },
    { header: "رقم لوحة الشاحنة", key: "plateNumber", width: 22 },
    { header: "رقم الأسطول", key: "fleetNumber", width: 16 },
    { header: "رقم الحاوية", key: "containerNumber", width: 20 },
    { header: "المقاس", key: "size", width: 12 },
    { header: "النوع", key: "type", width: 16 },
    { header: "رقم الرصاص الملاحي", key: "sealNumber", width: 22 },
    { header: "رقم البيان الجمركي", key: "declarationNumber", width: 22 },
    { header: "من - الميناء", key: "port", width: 28 },
    { header: "إلى - الوجهة", key: "destination", width: 28 },
    { header: "موعد إعادة الفارغ", key: "returnDueAt", width: 20 },
    { header: "تاريخ عودة الفارغ", key: "returnedAt", width: 20 },
    { header: "رقم إيصال EIR", key: "eir", width: 20 },
    { header: "نهاية فترة السماح المجانية", key: "freeTimeEndsAt", width: 26 },
    { header: "حالة عودة الفارغ", key: "returnStatus", width: 22 }
  ];
  sheet.views = [{ rightToLeft: true, state: "frozen", ySplit: 1 }];
  sheet.autoFilter = { from: "A1", to: "V1" };
  sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF17324D" } };
  for (const column of [1, 2, 18, 19, 21]) {
    sheet.getColumn(column).numFmt = "yyyy-mm-dd";
  }
  for (const trip of filtered) {
    const freeTimeEndsAt = trip.freeTimeEndsAt || trip.emptyReturnDueAt;
    const daysRemaining = freeTimeEndsAt
      ? Math.ceil((freeTimeEndsAt.getTime() - Date.now()) / 86400000)
      : null;
    const returnStatus = trip.emptyReturnedAt
      ? "تمت الإعادة"
      : daysRemaining === null ? "غير محدد"
        : daysRemaining < 0 ? "متأخرة"
          : daysRemaining <= 2 ? "تقترب المهلة" : "ضمن المهلة";
    const row = sheet.addRow({
      operationAt: trip.operationAt,
      clearedAt: trip.customsClearance.clearedAt || "",
      customer: trip.customer.name,
      driver: trip.driver.name,
      nationalId: trip.driver.nationalId,
      phone: trip.driver.phone,
      documentNumber: trip.transportDocument?.documentNumber || "غير صادر",
      documentStatus: trip.transportDocument?.source === "MANUAL_ENTRY"
        ? "مدخل يدوياً"
        : trip.transportDocument?.status || "DRAFT",
      plateNumber: trip.truck.plateNumber,
      fleetNumber: trip.truck.fleetNumber,
      containerNumber: trip.container.containerNumber,
      size: trip.container.size === "FT_20" ? "20 قدم" : "40 قدم",
      type: trip.container.type,
      sealNumber: trip.customsClearance.shippingSealNumber || "",
      declarationNumber: trip.customsClearance.declarationNumber,
      port: trip.port.name,
      destination: trip.deliveryDestination,
      returnDueAt: trip.emptyReturnDueAt || "",
      returnedAt: trip.emptyReturnedAt || "",
      eir: trip.eirReceiptNumber || "",
      freeTimeEndsAt: freeTimeEndsAt || "",
      returnStatus
    });
    const returnCell = row.getCell(22);
    if (trip.emptyReturnedAt) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDF4E5" } };
    } else if (daysRemaining !== null && daysRemaining < 0) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFCE2E2" } };
    } else if (daysRemaining !== null && daysRemaining <= 2) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF1C7" } };
    }
  }
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", `attachment; filename="north-world-report-${new Date().toISOString().slice(0, 10)}.xlsx"`);
  await workbook.xlsx.write(res);
  res.end();
});

router.get("/ports", requireAdmin, async (req, res) => {
  const ports = await prisma.port.findMany({ orderBy: { name: "asc" } });
  res.json(ports);
});

export default router;
