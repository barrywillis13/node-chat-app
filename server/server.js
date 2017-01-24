const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

var app = express()
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New User Connected')

  socket.on('disconnect', () => {
    console.log('Client Disconnected')
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
