const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  name: String,
  ability: String,
  id: Number,
  moves: [String],
  ev: Number,
  evYield: Number,
  usedBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Pokemon', pokemonSchema)