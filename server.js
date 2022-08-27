const express = require("express");
const cors = require("cors");

const app = express();
const server = require('http').Server(app) // server for socket io
const io = require('socket.io')(server,{
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
const { v4: uuidV4 } = require('uuid')
const PORT = process.env.PORT || 5100;  

/**
 * Middle Ware
 */
app.use(cors()); // Handles cross orign request errors.
app.use(express.json()); //	Converts the request body into json object from string
app.use(express.urlencoded({ extended: true })); // Understand fetch requests
app.use(express.static("public/build")); // for pushing onto heroku
app.use(express.static("public")); // for pushing onto herokux


/**
 * Routes
 */

app.use("/home", (req, res) => {
    res.send({ msg: "Hello", roomId: uuidV4() });
});

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
    res.render('/', { roomId:req.params.room } )
})


io.on('connection', socket => {
    socket.emit('me', socket.id)

    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.broadcast.to(roomId).emit("user-connected", userId);

        console.log(roomId,userId);
       socket.on('disconnect', ()=>{
            socket.to(roomId).broadcast.emit('user-disconnected', userId)
        }) 
    })


 
})
 


/**
 * Listening
 */
server.listen(PORT, () =>{ 
    console.log(`Sever running on ${PORT}`)
}); 
