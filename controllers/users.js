var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

//=====================GET ROUTES======================

//User Index Route
router.get('/', function(req, res){
  User.find({}, function(err, foundUsers){
    res.render('users/index.ejs', {
      user:foundUsers
    });
  });
});

//User New Route
router.get('/new', function(req, res){
  res.render('users/new.ejs');
});

//User Show Route
router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, foundUsers){
    res.render('users/show.ejs', {
      user: foundUsers
    });
  });
});

//User Edit Route
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id, function(err, foundUsers){
    res.render('users/edit.ejs', {
      user: foundUsers
    });
  });
});

//=====================PUT ROUTE======================
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedUser){
    res.redirect('/users');
  });
});


//=====================POST ROUTE======================
router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    res.redirect('/users');
  });
});

//=====================DELETE ROUTE======================





module.exports = router;
