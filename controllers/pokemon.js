const axios = require('axios')
const Pokemon = require('../models/pokemons')
const User = require('../models/user')

module.exports = {
  pokedex,
  pokeSearch,
  pokeTeam
};

function pokeTeam(req, res) {
  User.find({})
    .then((users) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.toLowerCase()}`)
        .then(response => {
          res.redirect('pokemon/pokeTeamPage', {
            title: 'Add Your Team',
            pokemon: response.data,
            user: req.user,
            users
          })
        })
    })
}

function pokeSearch(req, res) {
  User.find({})
    .then((users) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.search.toLowerCase()}`)
        .then(response => {
          console.log(response.data.species)
          res.render('pokemon/pokedexPage', {
            pokemon: response.data,
            user: req.user,
            users
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