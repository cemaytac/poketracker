const router = require('express').Router();
const pokemonCtrl = require('../controllers/pokemons');

router.get('/pokedex', pokemonCtrl.pokedex);
router.post('/pokeSearch', isLoggedIn, pokemonCtrl.pokeSearch);
router.get('/:id/team', isLoggedIn, pokemonCtrl.show);
router.post('/:id/team', isLoggedIn, pokemonCtrl.pokeAdd);
router.delete(':/id', isLoggedIn, pokemonCtrl.pokeRemove);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;