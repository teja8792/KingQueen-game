import { Socket } from "socket.io-client";
const io = Socket("https://fwun2.sse.codesandbox.io/", {
  path: "/game",
  transports: ["websocket"]
});
io.on("connect", () => {
  console.log("Socket connected");
});
export default io;
