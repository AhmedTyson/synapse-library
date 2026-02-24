const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON body
app.use(express.json({ limit: "10mb" }));

// Prevent caching for all routes (to ensure UI updates are always seen)
app.use((req, res, next) => {
  // CORS Headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Cache-Busting Headers
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  res.set("Surrogate-Control", "no-store");
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// API Endpoint to save the main library.json config
app.post("/api/save-library", (req, res) => {
  try {
    const libraryPath = path.join(__dirname, "public", "library.json");
    fs.writeFileSync(libraryPath, JSON.stringify(req.body, null, 2), "utf8");
    res.json({ success: true, message: "library.json updated" });
  } catch (err) {
    console.error("Error saving library data:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// API Endpoint to save a new document JSON file
app.post("/api/save-document", (req, res) => {
  try {
    const { file, content } = req.body;
    if (!file || !file.startsWith("docs/")) {
      return res.status(400).json({ success: false, error: "Invalid path" });
    }
    const docPath = path.join(__dirname, "public", file);

    // Ensure the docs directory exists
    const dirname = path.dirname(docPath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(docPath, JSON.stringify(content, null, 2), "utf8");
    res.json({ success: true, message: "Document saved" });
  } catch (err) {
    console.error("Error saving document data:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Fallback to index.html for any other GET requests (SPA behavior if needed)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Global Error Handler to catch unmapped routes and prevent empty responses
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: "API Route Not Found" });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
