// npm init
// node server.js
var express = require('express'); //importing express in the node program
var x = false;

//if (x = true) {
//  var remove = require('./remove.js');
//}


var app = express();
var server = app.listen(process.env.PORT || 8200);

app.use(express.static('public'));

console.log("Waiting for incomming Socket connections")
console.log(module);

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('Socket ID:' + socket.id);
  console.log('Connecting Sockets_In to Server.js');
}


//console.log(remove);
