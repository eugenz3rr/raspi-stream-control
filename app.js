"use strict";

const http = require('http');
const express = require('express');
const WebStreamerServer = require('./server/lib/raspivid');
const app  = express();
app.use(express.static(__dirname + '/client'));

const server  = http.createServer(app);
const silence = new WebStreamerServer(server);

const io = require('socket.io')(server);

// Handles the socket.io requests.
let socketListener = require('./socket-listener');
socketListener = new socketListener(io);

server.listen(8081);