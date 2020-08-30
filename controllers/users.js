const User = require('../models/user');
const Pokemon = require('../models/pokemons')

module.exports = {
  index,
  showTrainer,
  update
};

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, {
    new: true
  }).then(() => {
    res.redirect('/users/trainer')
  })
}

function showTrainer(req, res) {
  User.findById(req.user._id).then((user) => {
    res.render('users/trainer', {
      title: 'Trainer Page',
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