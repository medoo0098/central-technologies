import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import {
  sendInternalNotification,
  sendCustomerAcknowledgement,
  sendTestEmail,
} from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);

      const emailData = {
        id: inquiry.id,
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        requirements: inquiry.requirements,
        createdAt: inquiry.createdAt || new Date(),
        sourceUrl: req.headers.referer || "https://centraltechnologies.london/",
        userAgent: req.headers["user-agent"] || undefined,
        ipAddress:
          (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
          req.socket.remoteAddress ||
          undefined,
      };

      try {
        await Promise.all([
          sendInternalNotification(emailData),
          sendCustomerAcknowledgement(emailData),
        ]);
      } catch (emailErr) {
        console.error("Failed to send emails:", emailErr);
      }

      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  app.post("/api/test-email", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email address required" });
      }
      await sendTestEmail(email);
      res.json({ success: true, message: "Test email sent successfully" });
    } catch (err) {
      console.error("Test email failed:", err);
      res
        .status(500)
        .json({ message: "Failed to send test email", error: String(err) });
    }
  });

  return httpServer;
}
