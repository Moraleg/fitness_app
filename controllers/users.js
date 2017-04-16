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

//=====================PUT ROUTE======================

//=====================POST ROUTE======================


//=====================DELETE ROUTE======================





module.exports = router;
