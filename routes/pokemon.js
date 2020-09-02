const router = require('express').Router();
const pokemonCtrl = require('../controllers/pokemon');

router.get('/pokedex', pokemonCtrl.pokedex);
router.post('/pokeSearch', isLoggedIn, pokemonCtrl.pokeSearch);
router.post('/:id', isLoggedIn, pokemonCtrl.pokeAdd);
router.delete(':/id', isLoggedIn, pokemonCtrl.pokeRemove);
router.get('/:id', isLoggedIn, pokemonCtrl.show);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;