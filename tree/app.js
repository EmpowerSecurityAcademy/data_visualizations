var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/empower_csv', function(req, res){
	res.sendFile(__dirname + '/empower.csv')
})

app.get('/empower', function(req, res){
	res.sendFile(__dirname + '/index.html')
})


app.listen(3000);