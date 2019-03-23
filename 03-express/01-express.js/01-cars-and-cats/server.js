var express = require("express");

var app = express();

app.get('/', function(request, respond){
});

app.get('/cars', function(request, respond){
});

app.get('/cats', function(request, respond){
});

app.get('/form', function(request, respond){
});

app.use(express.static(__dirname + "/static"));

app.listen(8000, function(){
    console.log("listening on port 8000");
})