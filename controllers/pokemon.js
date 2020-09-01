const axios = require('axios')
const Pokemon = require('../models/pokemons')
const User = require('../models/user');

module.exports = {
  pokedex,
  pokeSearch
};

function pokeSearch(req, res) {
  User.find({})
    .then((users) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.search.toLowerCase()}`)
        .then(response => {
          res.render('pokemon/pokedexPage', {
              pokemon: response.data,
              user: req.user,
              users
            })
            .then(response => {
              res.render('users/trainer', {
                pokemon: response.data,
                user: req.user,
                users
              })
            })
        })
    })
}

function pokedex(req, res) {
  User.find({})
    .then((users) => {
      res.render('pokemon/pokedexPage', {
        title: 'Pokedex',
        pokemon: null,
        user: req.user,
        users
      })
    })
}