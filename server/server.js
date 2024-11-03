// Import the Socket.IO library and initialize a server instance that listens on port 3000
const io = require("socket.io")(3000, {
  cors: {
    // Allow requests from this origin
    methods: ["GET", "POST"],
  },
});

// Set up an event listener for new client connections
io.on("connection", (socket) => {
  console.log("User connected!");

  socket.on("notifyUser", () => {
    // Broadcast a 'notifyUser' event to all connected clients with a message
    io.emit("notifyUser", "Notification From Admin");
  });
});
