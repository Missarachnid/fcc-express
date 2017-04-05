//require express
var express = require('express');
//create application
var app = express();
//responds with string when you go /home
app.get('/home', function(req,res){
    res.end('Hello World!');
});
//port number in 1st argument
app.listen(process.argv[2]);
