const axios = require('axios')
const Pokemon = require('../models/pokemons')
const User = require('../models/user');
const {
  response
} = require('express');

module.exports = {
  pokedex,
  pokeSearch,
  show,
  pokeAdd,
  pokeRemove
};

function pokeAdd(req, res) {
  req.user.team.push(req.body)
  req.user.save().then(() => {
    res.redirect(`/pokemon/${req.body.id}`)
  })
}

function pokeRemove(req, res) {
  let idx = req.user.team.findIndex((p) => p.id === req.params.id)
  req.user.team.splice(idx, 1)
  req.user.save().then(() => {
    res.redirect(`/pokemon/${req.body.id}`)
  })
}

function show(req, res) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${req.params.id.toLowerCase()}`)
    .then((response) => {
      console.log(response.data)
      res.render('pokemon/pokeShow', {
        title: 'Pokemon Details',
        user: req.user,
        pokemon: response.data
      })
    })
}

// function show(req, res) {
// User.find({})
//   .then((users) => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id.toLowerCase()}`)
//       .then((response) => {
//         Pokemon.findOne({
//             id: response.data.id
//           })
//           .then((pokemons) => {
//             if (pokemons) {
//               res.render('pokemon/pokeShow', {
//                 user: req.user,
//                 pokemon: response.data,
//                 usedBy: pokemon.usedBy,
//                 pokemonId: pokemon._id,
//                 users
//               })
//             } else {
//               res.render('pokemon/pokeShow', {
//                 user: req.user,
//                 pokemon: response.data,
//                 usedBy: [""],
//                 users
//               })
//             }
//           })
//       })
//   })
// }

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query.toLowerCase()}`)
    .then((response) => {
      res.render('pokemon/pokedexPage', {
        pokemon: response.data,
        user: req.user ? req.user : null,
      })
    })
}

function pokedex(req, res) {
  res.render('pokemon/pokedexPage', {
    title: 'Pokedex',
    pokemon: null,
    user: req.user ? req.user : null
  })
}