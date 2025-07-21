import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("✅ Connected to server");
    });

    socket.on("mockMessages", (data) => {
      console.log("📩 Received mockMessages:", data);
      setMessages(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Socket.IO Chat</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
