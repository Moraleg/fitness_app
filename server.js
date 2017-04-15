var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = 3000;

//=====================MIDDLEWARE======================
app.use(express.static('public'));
//================CONTROLLERS CONNECTED================

//=====================GET ROUTE======================
app.get('/', function(req, res){
  // res.send('main page route working');
  res.render('index.ejs');
});





//=====================DATABASE CONNECTED=====================
mongoose.connect('mongodb://localhost:27017/fitness');
mongoose.connection.once('open', function(){
  console.log('mongoose is connected');
});


//=====================SERVER CONNECTED======================
app.listen(port, function(){
  console.log('listening on port:', port);
});
