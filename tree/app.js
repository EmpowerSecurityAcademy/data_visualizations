var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/empower_csv', function(req, res){
	res.sendFile(__dirname + 'empower.csv')
})


app.listen(3000);