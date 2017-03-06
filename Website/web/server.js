var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
app.post('/login/login.html', function (req, res) {
  res.send('POST request to the homepage')
})
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

});

http.listen(8888, function(){
  console.log('listening on *:8888');
});
