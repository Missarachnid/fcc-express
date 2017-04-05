//require express
var express = require('express');
//create application
var app = express();

//serves file without any routs. File is provided as 2nd argment
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
//port number is in 1st argument
app.listen(process.argv[2]);
