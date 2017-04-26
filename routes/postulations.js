var express = require('express');
var router = express.Router();
var askRole = require('../models/askRole');

/* GET Insert postulation page. */
router.get('/', function(req,res,next) {
    askRole.find({},{},function(err, requestlist) {
        res.render('postulations', {
            titlePage: "FaceCast | Les postulations", 
            header: "Liste des postulations",
            requestlist : requestlist
        });
    }).populate('_figurant')
    .populate('_role')
    .populate('_event')
    .populate('_stateRequest');
});

/* Suppression d'une postulation */
router.delete('/delete/:id', function(req,res,next) {
    var id = req.params.id;
    
    askRole.remove({'_id': id}, function(err){
        if(err){
            res.send('Erreur lors de la suppression..');
        } else {
            res.send('Suppression réussie !');
        }
    });
});

module.exports = router;