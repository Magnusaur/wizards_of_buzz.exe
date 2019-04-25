
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("run my SHIIIIT!");

var socket = require('socket.io');
