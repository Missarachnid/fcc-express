//require express
var express = require('express');
//require crypto - wraps response
var crypto = require('crypto');
//create app
var app = express();

//an express.js server than handles Put to message requests 
app.put('/message/:id', function(req, res){
//The id is extracted from the request
    var id = req.params.id;
    //returns an SHA1 hash of the date & the id
    res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

//port sent as 1st argument
app.listen(process.argv[2]);
