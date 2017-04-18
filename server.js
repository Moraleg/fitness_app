var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fitness';

//=====================MIDDLEWARE======================
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'jagoobola',
  resave: false,
  saveUninitialized: false
}));

//================CONTROLLERS CONNECTED================
var userController = require('./controllers/users.js');
app.use('/users', userController);

var workoutsController = require('./controllers/workouts.js');
app.use('/workouts', workoutsController);

var sessionController = require('./controllers/sessions.js');
app.use('/sessions', sessionController);
//=====================GET ROUTE======================
app.get('/', function(req, res){
  // res.send('main page route working');
  res.render('index.ejs');
});


//=====================DATABASE CONNECTED=====================
mongoose.connect(mongoDBURI);
mongoose.connection.once('open', function(){
  console.log('mongoose is connected');
});


//=====================SERVER CONNECTED======================
app.listen(port, function(){
  console.log('listening on port:' + port);
});
