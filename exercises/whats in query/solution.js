//require express
var express = require('express');
//create app
var app = express();


app.get('/search', function(req, res){
    //sends back the search query sting
    res.send(req.query);
});

//port provided as 1st argument
app.listen(process.argv[2]);
