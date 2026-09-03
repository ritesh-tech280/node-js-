const http = require('http');
const path = require('path');
const express = require('express');
const  { Server } = require('socket.io')
const app = express();
const server = http.createServer(app);


const io = new Server(server); 

app.use(express.static('./public'))

io.on('connection', (socket) => {
    socket.on('user-message' ,(text) => {
       io.emit('message' ,  {
        senderId : socket.id,
        text : text, 
       });
    })
});

app.get('/' , (req,res) => {
    res.sendFile('./index.html')
})


server.listen(8000, ()=> console.log(`Server running on PORT : 8000`))