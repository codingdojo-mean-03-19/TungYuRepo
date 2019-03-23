var express = require("express");

var app = express();
var cats_data = [
	{name: "Bella", age: 2, favorite_food: "Fish", img: "/images/cat1.jpeg"}, 
	{name: "Zoe", age: 3, favorite_food: "Chicken", img: "/images/cat2.jpeg"},
	{name: "Lucy", age: 5, favorite_food: "Mouse", img: "/images/cat3.jpeg"},
];
	
	app.get('/cats', function(request, response){
		response.render('cats');
	});

	app.get('/bella', function(request, response){
		response.render('details', {cats: cats_data[0]});
	});

	app.get('/zoe', function(request, response){
		response.render('details', {cats: cats_data[1]});
	});

	app.get('/lucy', function(request, response){
		response.render('details', {cats: cats_data[2]});
	});
	
	
	app.use(express.static(__dirname + "/static"));

	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');

app.listen(8000, function(){
    console.log("listening on port 8000");
})