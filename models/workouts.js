var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutsSchema = new Schema({
  username: {type: String, required: true},
  title: {type: String},
  description: String
});

var Workouts = mongoose.model('Workouts', workoutsSchema);

module.exports = Workouts;
