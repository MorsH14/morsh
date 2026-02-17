// Local dev server for testing the contact API
// Run: node server.js (in a separate terminal alongside npm start)

require("dotenv").config({ path: ".env.local" });
const http = require("http");
const handler = require("./api/contact");

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // CORS headers for local dev
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/contact" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      req.body = JSON.parse(body);
      const mockRes = {
        statusCode: 200,
        status(code) { this.statusCode = code; return this; },
        json(data) {
          res.writeHead(this.statusCode, { "Content-Type": "application/json" });
          res.end(JSON.stringify(data));
        },
      };
      await handler(req, mockRes);
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
