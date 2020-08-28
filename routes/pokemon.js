const router = require('express').Router();
const pokemonCtrl = require('../controllers/pokemon');


router.get('/', pokemonCtrl.index);


module.exports = router;