var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Workout = require('./workouts.js');

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  userImg: {type: String},
  // workouts: [Workout.schema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
