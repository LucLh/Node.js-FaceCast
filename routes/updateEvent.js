var express = require('express');
var router = express.Router();
var event = require('../models/event');
var eventType = require('../models/eventType');
var assocEventRole = require('../models/eventRole');
var role = require('../models/role');

router.get('/:idEvent&:idRole&:idEventRole', function(req, res, next) {
    var idEvent = req.body.idEvent;
    var idRole = req.body.idRole;
    var idEventRole = req.body.idEventRole;
    event.find({'_id' : idEvent}, {}, function(e, eventDoc) {
        role.find({'_id' : idRole}, {}, function(e, roleDoc) {
            assocEventRole.find({'_id' : idEventRole}, {}, function(e, eventRoleDoc) {
                res.render('updateEvent', {
                    titlePage : "Mise à jour de l'événement",
                    header : "Formulaire de mise à jour d'un évènement",
                    eventlist : eventDoc,
                    rolelist : roleDoc,
                    eventrolelist : eventRoleDoc,
                    idTest : idEvent
                });
            });
        });
    });
    //res.render('updateEvent', { titlePage : "Mise à jour de l'événement", header : "Formulaire de mise à jour d'un évènement" }); 
});

module.exports = router;