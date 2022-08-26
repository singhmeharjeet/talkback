const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5100;

/**
 * Middle Ware
 */
app.use(cors()); // Handles cross orign request errors.
app.use(express.json()); //	Converts the request body into json object from string
app.use(express.urlencoded({ extended: true })); // Understand fetch requests
app.use(express.static("public/build")); // for pushing onto heroku
app.use(express.static("public")); // for pushing onto heroku

/**
 * Listening
 */
app.listen(PORT, () => `Sever running on ${PORT}`);
