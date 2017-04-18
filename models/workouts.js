var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutsSchema = new Schema({
  username: {type: String, required: true},
  title: {type: String},
  day: {type: String},
  duration: {type: String},
  description: {type: String}
});

var Workouts = mongoose.model('Workouts', workoutsSchema);

module.exports = Workouts;
