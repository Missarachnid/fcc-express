//I realize jade has been renamed pug, exercise asked for jade

//require express
var express = require('express');
//create app
var app = express();

//output string when home visited
//
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/home', function(req, res){
//lets you create an express app in a port
    res.render('index', {date: new Date().toDateString()});
});
//port number is provided in 1st argument
app.listen(process.argv[2]);
