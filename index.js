var express = require('express');
var app = express();
var port = 3000;

app.set('views', __dirname + '/templates');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);


app.get("/",function(request, response){
	response.render("page");
});

app.use(express.static(__dirname+ '/resources'));

var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port 3000...");

io.sockets.on('connection' , function(socket) { 
	socket.emit('message', { message : "Welcome to Jabber Out!"});
	socket.on('send',function(data){
		io.sockets.emit('message',data);
	});
});

