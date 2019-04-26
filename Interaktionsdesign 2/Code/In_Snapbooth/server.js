
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('files'));


console.log("run my SHIIIIT!");

// var socket = require('socket.io');

// var io = socket(server);

//io.sockets.on('connection', newConnection);

//function newConnection(socket) {
//  console.log(socket);
//}
