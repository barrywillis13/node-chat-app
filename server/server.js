const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message')
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

var app = express()
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

/////////////////////////////////////////////
/////////////////////////////////////////////
io.on('connection', (socket) => {
  console.log('New User Connected')

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App!'))

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
    io.emit('newMessage', generateMessage(message.from, message.text))
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
  })

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New User Joined',
    createdAt: new Date().getTime()
  })


  socket.on('disconnect', () => {
    console.log('Client Disconnected')
  })
})


/////////////////////////////////////////////
/////////////////////////////////////////////

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
