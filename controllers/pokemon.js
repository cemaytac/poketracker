const axios = require('axios')
const Pokemon = require('../models/pokemons')
const User = require('../models/user');

module.exports = {
  pokedex,
  pokeSearch,
  newPokemon
};

// function show(req, res) {
//   User.find({})
//     .then((users) => {
//       axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.toLowerCase()}`)
//         .then(response => {
//           Pokemon.find({})
//             .populate('usedBy')
//             .then((pokemon) => {
//               if (pokemon) {
//                 res.render('pokemon/pokeTeamPage', {
//                   pokemon: response.data,
//                   user: req.user,
//                   users,
//                   usedBy: pokemon.usedBy,
//                   pokemonId: pokemon._id
//                 })
//               }
//             })
//         })
//     })
// }

// function pokeAdd(req, res) {
//   User.find({})
//     .then((users) => {
//       axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokemon.toLowerCase()}`)
//         .then(response => {
//           res.redirect('/', {
//             pokemon: response.data,
//             user: req.user,
//             users
//           })
//         })
//     })
// }

function newPokemon(req, res) {
  User.find({})
    .then((users) => {
      res.render('pokemon/pokeTeamPage', {
        title: 'Add Pokemon',
        pokemon: null,
        user: req.user,
        users
      })
    })
}

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