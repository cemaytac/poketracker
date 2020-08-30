const User = require('../models/user');
const Pokemon = require('../models/pokemons')

module.exports = {
  index,
  showProfile
};

function showProfile(req, res) {
  User.find({})
    .then((users) => {
      res.render('users/profile', {
        title: "Profile Page",
        user: req.user,
        users
      })
    })
}

function index(req, res) {
  User.find({})
    .then((users) => {
      res.render('users/index', {
        title: "User Index",
        user: req.user,
        users
      })
    })
}