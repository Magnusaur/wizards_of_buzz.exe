// npm init
// node server.js
var express = require('express'); //importing express in the node program

var app = express();
var server = app.listen(process.env.PORT || 8200);

app.use(express.static('public'));

console.log("Waiting for incomming Socket connections")

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('newConnection:' + socket.id);
}
