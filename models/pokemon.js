const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  name: String,
  id: Number,
  moves: [String],
})

module.exports = mongoose.model('Pokemon', pokemonSchema)