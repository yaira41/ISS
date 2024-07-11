import http from "http";
import app from "./app";
import startWebSocketServer from "./webSocket";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

startWebSocketServer(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
