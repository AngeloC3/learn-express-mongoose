var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
});


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
