var express = require('express');
var router = express.Router();
var mongoDB = require('mongodb');
var event = require('../models/event');
var eventType = require('../models/eventType');
var assocEventRole = require('../models/eventRole');
var role = require('../models/role');

/* Liste des événements et des rôles du modèle associatif eventRole.js */
router.get('/', function(req, res, next) {
    assocEventRole.find({},{},function(e, eventRoleDoc) {
        res.render('events', {
            titlePage : "Liste des événements et des rôles",
            header : "Liste des événements",
            eventrolelist : eventRoleDoc,
        });
    }).populate('_role').populate({ path: '_role', populate: {path:'_roleType', model:'roleType'} })
    .populate('_event').populate({ path: '_event', populate: {path:'_eventType', model:'eventType'} });
});

/* Suppression d'un événement et des rôles associés */
router.delete('/delete/:idEvent&:idRole&:idEventRole', function(req,res,next) {
    var idEvent = req.params.idEvent;
    var idRole = req.params.idRole;
    var idEventRole = req.params.idEventRole;
    
    event.remove({'_id': idEvent}, function(err) {
        role.remove({'_id': idRole}, function(err) {
            assocEventRole.remove({'_id': idEventRole}, function(err) {
                if(err){
                    res.send('Erreur lors de la suppression');
                } else {
                    res.send('Suppression réussie');
                }
            });
        });
    });
});

module.exports = router;