//require express
var express = require('express');
//makes the request stream easier to deal iwth
var bodyparser = require('body-parser');
//create app
var app = express();

//only parses url encoded bodies
app.use(bodyparser.urlencoded({extended: false}));

//takes the string sent and splits, reverses and joins it 
//so it is backwards, and returns it
app.post('/form', function(req, res){
    var newStr = req.body.str.split('').reverse().join('');
    res.send(newStr);
});

app.listen(process.argv[2]);
