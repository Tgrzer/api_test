var express = require('express'),
	app = express(),
	request = require('request'),
	bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static('public'));


// app.get('/', function(req,res){
// 	request('https://www.google.com/maps/embed/v1/MODE?key=AIzaSyCU9KC2frKN4MRxrNwoI_1ji3_CZib26D4&parameters', function(error, response,body){
// 			if(!error && response.statusCode == 200){
// 				var parsedData = JSON.parse(body);
// 				res.send(parsedData);
// 			}
// 	})

// })

app.get('/', function(req,res){
	res.render('index');
})


app.get('/home', function(req,res){
	res.render("home");
})






app.listen(3000, function(){
	console.log("Server is running");
})


//KEY
// AIzaSyCU9KC2frKN4MRxrNwoI_1ji3_CZib26D4

