const http = require("http");
const express = require("express");
const socketio = require("socket.io")
const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is Quannected to Port ${PORT}`))

io.on("connection", (socket) => {
    console.log('A Connection has been made')
    socket.on('disconnect', ()=> {
        console.log('A disconnection has been made')
    })
})
