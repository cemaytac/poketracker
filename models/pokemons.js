const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  name: String,
  ability: String,
  id: Number,
  moves: [String],
  evYield: Number
})

module.exports = mongoose.model('Pokemon', pokemonSchema)