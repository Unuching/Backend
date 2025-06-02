const { log } = require("console");
const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello from Unu");
  } else if (req.url === "/tea") { 
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end ("Thamks for ordering,its really hot");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/plain");
    res.end("404 Not Found");
  }
});
server.listen(port, hostName, () => {
  console.log(`Server is listening at http://${hostName}:${port}`);
});
