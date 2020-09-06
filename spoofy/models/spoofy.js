const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SpoofySchema = new Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  imageUrl: {type: String, required: true},
  time: {type: String, required: true}

}, {timestamps: true});


const Spoofy = mongoose.model('Spoofy', SpoofySchema);

module.exports = Spoofy;
