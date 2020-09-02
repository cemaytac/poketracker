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
  newPokemon,
  pokeAdd,
};


function pokeAdd(req, res) {
  // axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id.toLowerCase()}`)
  // Pokemon.findOne({
  //     id: req.params.id
  //   })
  //   .then((pokemon) => {
  //     if (pokemon) {
  //       pokemon.usedBy.push(req.user._id)
  //       pokemon.save()
  //         .then(() => {
  //           res.redirect(`/pokemon/${req.params.id}`)
  //         })
  //     } else {
  //       Pokemon.create(req.body)
  //         .then(() => {
  //           res.redirect(`/pokemon/${req.params.id}`)
  //         })
  //     }
  //   })
}

function newPokemon(req, res) {
  // User.find({})
  //   .then((users) => {
  //     axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.toLowerCase()}`)
  //     res.render('pokemon/pokeTeamPage', {
  //       title: 'Add Pokemon',
  //       pokemon: response.data,
  //       user: req.user,
  //       users
  //     })
  //   })
}

function show(req, res) {
  // User.find({})
  //   .then((users) => {
  //     axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id.toLowerCase()}`)
  //       .then((response) => {
  //         Pokemon.findOne({
  //             id: response.data.id
  //           })
  //           .populate('usedBy')
  //           .then((pokemon) => {
  //             if (pokemon) {
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
}

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