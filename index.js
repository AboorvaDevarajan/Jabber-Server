var express = require('express');
var app = express();
var port = 3000;

app.get("/",function(req, res){
	res.send("It works!");
});

app.listen(port);
console.log("Listening on port 3000...");
