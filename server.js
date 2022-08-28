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
    res.redirect(`/create${uuidV4()}`)
})

app.get('/create:create', (req, res) => {
    res.render('/create', { roomId:req.params.room } )
})


io.on('connection', socket => {

    socket.on('join-room', (room) => {
        socket.join(room.url)
        socket.broadcast.to(room.url).emit("user-connected", room);

        console.log(room.url);

       socket.on('disconnect', ()=>{
             socket.broadcast.to(room.url).emit("user-disconnected", room);
        }) 
    })


 
})
 
/**
 * Listening
 */
server.listen(PORT, () =>{ 
    console.log(`Sever running on ${PORT}`)
}); 
