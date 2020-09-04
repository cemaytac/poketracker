const Pokemon = require('../models/pokemon')
const axios = require('axios');
const User = require('../models/user');

module.exports = {
  pokedex,
  pokeSearch,
  pokeAdd,
  pokeRemove
};

function pokeAdd(req, res) {
  req.user.team.push(req.body)
  console.log(req.body.id)
  req.user.save().then(() => {
    res.redirect(`/users/trainer`)
  })
}


function pokeRemove(req, res) {
  console.log('req.params.id', req.params.id)
  let idx = req.user.team.findIndex((p) => {
    console.log('pokemon id', p.id)
    return p.id === parseInt(req.params.id)
  })
  console.log('idx', idx)
  req.user.team.splice(idx, 1)
  req.user.save().then(() => {
    res.redirect(`/users/trainer`)
  })
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