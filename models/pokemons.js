const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  name: String,
  moves: [String],
  ev: Number,
  evYield: Number
})

module.exports = mongoose.model('Pokemon', pokemonSchema)