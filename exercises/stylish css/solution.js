//require express
var express = require('express');
//create app
var app = express();

//path is in 2nd argument
app.use(express.static(process.argv[3]));
//using stylus

app.use(require('stylus').middleware(process.argv[3]));

//port provided in 1st argument
app.listen(process.argv[2]);
