const Pokemon = require('../models/Pokemon')

module.exports = {
  index,
};

function index(req, res) {
  Pokemon.find({})
    .then(users => {
      res.render('pokemon/index', {
        user: req.user,
        users
      })
    })
}