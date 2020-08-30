const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  species: String,
  name: String,
  types: String,
  ability: String,
  stats: Number,
  moves: String,
  sprites: String,
  ev: Number,
  evYield: Number
})

module.exports = mongoose.model('Pokemon', pokemonSchema)