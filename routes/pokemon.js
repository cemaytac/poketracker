const router = require('express').Router();
const pokemonCtrl = require('../controllers/pokemon');

router.get('/pokedex', isLoggedIn, pokemonCtrl.pokedex);
router.post('/pokeSearch', isLoggedIn, pokemonCtrl.pokeSearch);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;