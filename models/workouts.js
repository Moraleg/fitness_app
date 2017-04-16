var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutsShema = new Schema({
  username: {type: String, required: true},
  description: String
});

var Workouts = mongoose.model('Workouts', workoutsShema);

module.exports = Workouts;
