var express = require('express');
var router = express.Router();
var stateRequest = require('../models/stateRequest');

/* GET request role page. */
router.get('/', function(req, res, next) {
    stateRequest.find({},{},function(err,statelist) {
        res.render('insertStateRequest', {
            header: "Ajout d'un état", 
            title: "Ajout d'un état",
            titlePage: "FaceCast | Ajout d'un état",
            statelist: statelist
        });
    });
});

/* Ajout d'un état */
router.post('/addState', function(req, res) {
    var stateName = req.body.stateName;

    var newState = new stateRequest({
        "state" : stateName
    });
    
    newState.save(function(err, doc) {
        if(err) {
            res.send("Error");
        }
        else {
            res.redirect("/insertStateRequest");
        }
    });
});

/* Suppression d'un état */
router.delete('/delete/:id', function(req,res,next) {
    var id = req.params.id;
    
    stateRequest.remove({'_id': id}, function(err){
        if(err){
            res.send('Erreur lors de la suppression..');
        } else {
            res.send('Suppression réussie !');
        }
    });
});

module.exports = router;