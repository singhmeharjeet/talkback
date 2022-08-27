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
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
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
	res.render("./views/response.jsx")
});

app.get("/list", async (req, res) => {	
    console.log("enters")
    const getChambersQuery = 'select * from chambers';
    try{
        pool.query(getChambersQuery, (error, result) => {
            if (error) {
                console.log('error', error);
                res.json({ status: false, message: "error" }).status(400);
            } else {
                console.log("result", result);
                res.json({
                    status: true,
                    message: "success",
                    data: result.rows,
                }).status(200);
            }});
      }catch (error){
          res.end(error)
      }
      res.send("server is running")
});

/**
 * Listening
 */
server.listen(PORT, () => console.log(`Sever running on ${PORT}`)); 
