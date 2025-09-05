import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export async function createServer() {
  const app = express();

  // Connect to MongoDB
  await connectDatabase();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // User routes
  app.get("/api/users", getUsers);
  app.get("/api/users/:id", getUserById);
  app.post("/api/users", createUser);

  // Trade routes
  app.get("/api/trades", getTrades);
  app.get("/api/trades/user/:userId", getTradesByUserId);
  app.post("/api/trades", createTrade);
  app.patch("/api/trades/:id/status", updateTradeStatus);

  return app;
}
