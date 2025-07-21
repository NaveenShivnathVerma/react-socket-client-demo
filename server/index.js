const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("🚀 Client connected:", socket.id);

  const mockMessages = [
    "Welcome to the chat!",
    "This is a mock message.",
    "Enjoy Socket.IO in React"
  ];

  socket.emit("mockMessages", mockMessages);
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
