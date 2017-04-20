var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');

//sessions new route
router.get('/new', function(req, res){
  res.render('sessions/index.ejs');
});


//sessions post route
router.post('/', function(req, res){
  User.findOne({username: req.body.username}, function(err, foundUser){
    console.log(req.body.username);
    if(bcrypt.compareSync(req.body.password, foundUser.password)){
      req.session.currentuser = foundUser;
      res.redirect('/workouts');
    } else {
      res.send('wrong password');
    }
  });
});

//sessions Delete route
router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
});

module.exports = router;
