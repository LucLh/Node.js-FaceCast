var express = require('express');
var router = express.Router();
var figurant = require('../models/figurant');
var askRole = require('../models/askRole');

/* GET figurants page. */
router.get('/', function(req,res,next) {
    figurant.find({},{},function(err,figurantlist) {
        res.render('figurants', { 
            titlePage: "FaceCast | Liste des figurants", 
            header: "Les figurants",
            figurantlist: figurantlist
        });
    })
});

/* Suppression d'un figurant */
router.delete('/delete/:id', function(req,res,next) {
    var id = req.params.id;
    
    figurant.remove({'_id': id}, function(err){
        askRole.remove({'_figurant': id}, function(err) {
            if(err){
                res.send('Erreur lors de la suppression..');
            } else {
                res.send('Suppression réussie !');
            }
        });
    });
});

module.exports = router;