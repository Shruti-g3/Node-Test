const http = require("http");

let message = "No data yet";

const server = http.createServer((req, res) => {

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "POST" && req.url === "/write") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsed = JSON.parse(body);
      message = parsed.text;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, message: "Data saved!" }));
    });

  } else if (req.method === "GET" && req.url === "/read") {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: message }));

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
