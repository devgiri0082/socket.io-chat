const http = require("http").createServer();

const socket = require("socket.io");

const io = socket(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("client connected", socket.id);
  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", `${socket.id.substring(0, 2)}: ${data}`);
  });
});

const PORT = 3300;

http.listen(PORT, "localhost", () =>
  console.log(`listening to http://localhost:${PORT}`)
);

// let webSocket = require("ws");
// const PORT = 3300;

// const server = new webSocket.Server({
//   port: PORT,
// });

// server.on("connection", (socket) => {
//   console.log("Someone Connected", socket);
//   socket.on("message", (data) => {
//     console.log("message from client", data);
//     socket.send("thanks for the message");
//   });
// });
