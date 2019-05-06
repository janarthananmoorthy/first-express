var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Welcome Jana!');
});

app.get('/:id', function(req, res) {
	res.send('Welcome Jana(ID:'+ req.params.id +')!');
});

var things = require('./thing.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);