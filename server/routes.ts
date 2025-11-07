import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGiveawaySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/giveaways/:id", async (req, res) => {
    try {
      const giveaway = await storage.getGiveaway(req.params.id);
      if (!giveaway) {
        return res.status(404).json({ error: "Giveaway not found" });
      }
      res.json(giveaway);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch giveaway" });
    }
  });

  app.post("/api/giveaways", async (req, res) => {
    try {
      const validatedData = insertGiveawaySchema.parse(req.body);
      const giveaway = await storage.createGiveaway(validatedData);
      res.status(201).json(giveaway);
    } catch (error) {
      res.status(400).json({ error: "Invalid giveaway data", details: error });
    }
  });

  app.get("/api/giveaways", async (req, res) => {
    try {
      const giveaways = await storage.getAllGiveaways();
      res.json(giveaways);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch giveaways" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
