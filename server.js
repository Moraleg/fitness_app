var express = require('express');
var app = express();
var port = 3000;

//=====================MIDDLEWARE======================

//================CONTROLLERS CONNECTED================

//=====================GET ROUTE======================
app.get('/', function(req, res){
  // res.send('main page route working');
  res.render('index.ejs');
});





//=====================DATABASE CONNECTED=====================



//=====================SERVER CONNECTED======================
app.listen(port, function(){
  console.log('listening on port:', port);
});
