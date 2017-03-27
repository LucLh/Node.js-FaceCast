var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { header: 'FaceCast', title: 'Demande en attente de validation', titlePage: 'FaceCast | Accueil' });
});

module.exports = router;
