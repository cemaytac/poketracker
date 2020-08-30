const axios = require('axios')
const Pokemon = require('../models/pokemons')
const User = require('../models/user')

module.exports = {
  pokedex,
};

function pokedex(req, res) {
  User.find({})
    .then((users) => {
      res.render('pokemon/pokedexPage', {
        title: 'Pokedex',
        user: req.user,
        users
      })
    })
}