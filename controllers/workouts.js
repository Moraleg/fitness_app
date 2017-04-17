var express = require('express');
var router = express.Router();
var Workouts = require('../models/workouts.js');

//=====================GET ROUTES======================


//Workouts Index Route
router.get('/', function(req, res){
  Workouts.find({}, function(err, foundWorkouts){
    res.render('workouts/index.ejs', {
      workout:foundWorkouts
    });
  });
});









module.exports = router;
