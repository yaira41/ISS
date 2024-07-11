import WebSocket from "ws";
import { getIssDetails } from "../services/iss.services";

const clients: Set<WebSocket> = new Set();

const startWebSocketServer = (server: any) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", async (ws) => {
    clients.add(ws);
    ws.send(JSON.stringify(await getIssDetails()));

    ws.on("close", () => {
      clients.delete(ws);
    });
  });

  setInterval(async () => {
    try {
      const message = await getIssDetails();

      console.log(clients.size);

      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(message));
        }
      });
    } catch (error) {
      console.error("Error fetching ISS location:", error);
    }
  }, 10000);
};

export default startWebSocketServer;
