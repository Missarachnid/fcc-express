//require express
var express = require('express');
//require file system
var fs = require('fs');
//create app
var app = express();


app.get('/books', function(req, res){
//reads file at port passed in 2nd argument
    fs.readFile(process.argv[3], function(err, resData){
        if(err) {
            throw err;
        }
        //turns it into a json before responding
        var item = JSON.parse(resData);
        res.send(item);
    });
});

//port sent as 1st argument
app.listen(process.argv[2]);
