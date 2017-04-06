var express = require('express');
var router = express.Router();

router.get('/:idEvent&:idRole&:idEventRole', function(req, res, next) {
    var idEvent = req.body.idEvent;
    var idRole = req.body.idRole;
    var idEventRole = req.body.idEventRole;

    res.render('updateEvent', { titlePage : "Mise à jour de l'événement", header : "Formulaire de mise à jour d'un événement" }); 
});

module.exports = router;