const express = require("express");
const cors = require("cors");

const app = express();
const server = require('http').Server(app) // server for socket io
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')
const PORT = process.env.PORT || 5100;  

/**
 * Middle Ware
 */
app.use(cors()); // Handles cross orign request errors.
app.use(express.json()); //	Converts the request body into json object from string
app.use(express.urlencoded({ extended: true })); // Understand fetch requests
app.use(express.static("public/build")); // for pushing onto heroku
app.use(express.static("public")); // for pushing onto heroku

// take a response and request
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room } )
})

const test = io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.join(roomId).broadcast.emit('uset-connected',userId)
    })

    socket.on('disconnect', ()=>{
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
})
 
/**
 * Routes
 */

app.use("/home", (req, res) => {
	res.send({ msg: "Hello" });
});

/**
 * Listening
 */
app.listen(PORT, () => console.log(`Sever running on ${PORT}`)); 
