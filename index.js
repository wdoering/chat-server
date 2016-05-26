var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });


io.on('connection', function(socket){
	console.log('user connected');

  socket.on('new message', function(msg){
  	console.log(msg);
  	

    // var serverMessage = {username: 'Server', message: 'message coming from the chat server!!'};
    io.emit('new message', msg);
    
  });





});

http.listen(3000, function(){
  console.log('listening on *:3000');
});