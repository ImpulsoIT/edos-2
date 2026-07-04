import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Enable JSON request body parsing for registration/survey submissions
  app.use(express.json());

  // API Route for Lead registration & interactive survey submission
  app.post("/api/lead-submit", (req, res) => {
    try {
      const { email, phone, name, source, answers } = req.body;
      
      // Real-world server logging (safe and hidden from the browser console)
      console.log("[METODO EDOS LEAD]:", { email, phone, name, source, answers, timestamp: new Date() });
      
      // Respond successfully to the client
      return res.status(200).json({
        success: true,
        message: "¡Registro procesado exitosamente! Tu cupo provisional está reservado.",
        lead: { name, email },
        nextStepUrl: "https://chat.whatsapp.com/EDOS_VIP_PLACEHOLDER" // Custom redirect URL to WhatsApp VIP group
      });
    } catch (error) {
      console.error("Error processing lead:", error);
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Método EDOS Landing Server", timestamp: new Date() });
  });

  // Configure middleware depending on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== "true",
        watch: process.env.DISABLE_HMR === "true" ? null : {}
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets from the /dist directory
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Fallback all SPA routes to index.html for browser refresh safety
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`[MÉTODO EDOS SERVER] Running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
