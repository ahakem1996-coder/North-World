import express from "express";
import helmet from "helmet";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import { requireAuth, requireSameOrigin } from "./middleware/auth.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import authRoutes from "./routes/auth.js";
import appRoutes from "./routes/app.js";

const app = express();
const clientDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../client");

if (env.NODE_ENV === "production") app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      upgradeInsecureRequests: env.NODE_ENV === "production" ? [] : null
    }
  },
  strictTransportSecurity: env.NODE_ENV === "production" ? undefined : false
}));
app.use(express.json({ limit: "256kb" }));
app.use(requireSameOrigin);

app.get("/api/health/live", (req, res) => res.json({ status: "ok" }));
app.get("/api/health/ready", async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ status: "ready" });
});
app.use("/api/auth", authRoutes);
app.use("/api", requireAuth, appRoutes);
app.get("/api/integrations", requireAuth, (req, res) => {
  res.json({
    fasah: { status: "DISCONNECTED", message: "Official adapter is not configured." },
    bayan: { status: "DISCONNECTED", message: "Official adapter is not configured." },
    naql: { status: "DISCONNECTED", message: "Official adapter is not configured." }
  });
});
app.use(express.static(clientDirectory, {
  index: "index.html",
  setHeaders(res, filePath) {
    if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-store");
  }
}));
app.use(notFound);
app.use(errorHandler);

const server = app.listen(env.PORT, env.HOST, () => {
  console.log(`North World transport server listening on ${env.HOST}:${env.PORT}`);
});

async function shutdown(signal) {
  console.log(`${signal} received; shutting down.`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
