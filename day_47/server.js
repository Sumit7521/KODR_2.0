const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("user connected");

    setInterval(()=>{
        socket.emit("mama")
    },2000)

    io.on('disconnect', ()=>{
        console.log('user disconnectewd')
    })
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});
