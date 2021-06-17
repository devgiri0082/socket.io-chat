let message = document.getElementById("message");
let button = document.getElementById("send");
let msgInput = document.getElementById("msg-input");

const socket = io("ws://localhost:3300");
socket.on("connect", () => {
  console.log("connection established");
});
socket.on("message", (data) => {
  console.log(data);
  let newMessage = document.createElement("li");
  newMessage.innerText = data;
  let ul = document.getElementById("messages");
  ul.append(newMessage);
});
button.addEventListener("click", sendMessage);
function sendMessage() {
  socket.send(msgInput.value);
  console.log(msgInput.value);
}
//using ws and websocket api on client side
// let message = document.getElementById("message");
// let button = document.getElementById("send");
// let msgInput = document.getElementById("msg-input");

// let socket = new WebSocket("ws://localhost:3300");

// button.addEventListener("click", sendMessage);

// socket.onopen = (e) => {
//   console.log("connected to the server");
//   socket.send("Hello there");
// };

// socket.addEventListener("message", (e) => {
//   message.innerText = e.data;
// });

// socket.onclose = (e) => {
//   console.log("server is closed");
// };
// function sendMessage() {
//   socket.send(msgInput.value);
//   console.log(msgInput.value);
// }
