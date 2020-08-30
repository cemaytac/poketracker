const User = require('../models/user');
const Pokemon = require('../models/pokemons')

module.exports = {
  index,
  showProfile
};

function showProfile(req, res) {
  User.findById(req.user._id).populate('friends').then((user) => {
    res.render('users/profile', {
      title: 'Profile Page',
      user
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