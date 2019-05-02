// npm init
// node server.js
var express = require('express'); //importing express in the node program

var app = express();
var server = app.listen(8000);

app.use(express.static('public'));

console.log("my server is ShiiIt!")

var socket = require('socket.io');

var io = socket(server);
