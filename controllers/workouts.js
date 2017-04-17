var express = require('express');
var router = express.Router();
var Workouts = require('../models/workouts.js');
var User = require('../models/users.js');

//=====================GET ROUTES======================


//Workouts Index Route
router.get('/', function(req, res){
  Workouts.find({}, function(err, foundWorkouts){
    res.render('workouts/index.ejs', {
      workout:foundWorkouts
    });
  });
});

//Workouts New Route
router.get('/new', function(req, res){
  res.render('workouts/new.ejs');
});


//Workouts Show Route
router.get('/:id', function(req, res){
  Workouts.findById(req.params.id, function(err, foundWorkouts){
    res.render('workouts/show.ejs', {
      workout: foundWorkouts,
    });
  });
});

//Workouts Edit Route
router.get('/:id/edit', function(req, res){
  Workouts.findById(req.params.id, function(err, foundWorkouts){
    res.render('workouts/edit.ejs', {
      workout: foundWorkouts
    });
  });
});

// //=====================PUT ROUTE======================
router.put('/:id', function(req, res){
  Workouts.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedWorkouts){
    res.redirect('/workouts');
  });
});

// //=====================POST ROUTE======================
router.post('/', function(req, res){
  Workouts.create(req.body, function(err, createdWorkouts){
    console.log(req.body);
    res.redirect('/workouts');
  });
});




module.exports = router;
