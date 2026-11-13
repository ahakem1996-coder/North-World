import test from "node:test";
import assert from "node:assert/strict";
import { manualClearanceSchema, manualDocumentReferenceSchema } from "../src/utils/manual-input.js";

const clearanceInput = {
  declarationNumber: "D-1001",
  containerNumber: "abcu1234567",
  size: "FT_40",
  type: "DRY",
  portName: "ميناء الدمام",
  portCity: "الدمام",
  status: "CLEARED",
  clearedAt: "2026-06-05"
};

test("manual clearance validation requires a date when marked cleared", () => {
  const parsed = manualClearanceSchema.safeParse(clearanceInput);
  assert.equal(parsed.success, true);
  assert.equal(parsed.data.containerNumber, "ABCU1234567");
  assert.equal(manualClearanceSchema.safeParse({ ...clearanceInput, clearedAt: "" }).success, false);
  assert.equal(manualClearanceSchema.safeParse({ ...clearanceInput, size: "FT_10" }).success, false);
});

test("manual transport document number and date must be entered together", () => {
  assert.equal(manualDocumentReferenceSchema.safeParse({ manualDocumentNumber: "", manualDocumentDate: "" }).success, true);
  assert.equal(manualDocumentReferenceSchema.safeParse({
    manualDocumentNumber: "BAYAN-1001",
    manualDocumentDate: "2026-06-05"
  }).success, true);
  assert.equal(manualDocumentReferenceSchema.safeParse({
    manualDocumentNumber: "BAYAN-1001",
    manualDocumentDate: ""
  }).success, false);
});
