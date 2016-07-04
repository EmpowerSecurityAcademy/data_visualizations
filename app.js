var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/bubble_chart', function(req, res){
	res.sendFile(__dirname + '/public/visualizations/bubble_chart.html')
})

app.listen(3000);