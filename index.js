var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));


io.on('connection', function(socket){
	socket.on('send_message', function(msg){
		console.log(msg);
    	socket.broadcast.emit('recive_message', msg);
	});
	socket.on('play', function(msg){
		console.log(msg);
    	socket.broadcast.emit('play_remote', msg);
	});
});

http.listen(port, function(){
	console.log("http server listening on %d", port)
});
