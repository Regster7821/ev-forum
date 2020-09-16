const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);
const AllMyPostRoutes = require('./server/routes/post.routes');
AllMyPostRoutes(app);

const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"));

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('event_from_client', data => {
        socket.broadcast.emit('send_data_to_all_other_clients', data);
    });
});