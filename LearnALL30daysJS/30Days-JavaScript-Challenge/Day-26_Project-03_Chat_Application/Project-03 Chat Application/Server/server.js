const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Map();

wss.on("connection", function connection(ws) {
  console.log("New client connected");

  ws.on("message", function incoming(message) {
    const messageData = JSON.parse(message);
    console.log("Received:", messageData);

    if (messageData.type === "auth") {
      const username = messageData.username;
      clients.set(ws, username);
      console.log(`User ${username} authenticated`);
    } else if (messageData.type === "chat") {
      const username = clients.get(ws);
      const chatMessage = {
        type: "chat",
        username: username,
        message: messageData.message,
      };

      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(chatMessage));
        }
      });
    }
  });

  ws.on("close", function close() {
    const username = clients.get(ws);
    console.log(`User ${username} disconnected`);
    clients.delete(ws);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
