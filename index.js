var express = require('express');
var app = express();
var port = 3000;

app.set('views', __dirname + '/templates');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);


app.get("/",function(request, response){
	response.render("page");
});

app.listen(port);
console.log("Listening on port 3000...");
