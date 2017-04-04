var express = require('express');
var router = express.Router();
var fs = require('fs');
var event = require('../models/event');
var eventType = require('../models/eventType');
var roleType = require('../models/roleType');
var role = require('../models/role');
var assocEventRole = require('../models/eventRole');

/* Liste des régions avec lecture JSON et des types d'événements*/
router.get('/', function(req,res,next) {
    var contenu = fs.readFileSync("public/json/region.json", "UTF-8");
    var region = JSON.parse(contenu);
    var obj = region.regionInfo;
    eventType.find({},{},function(e,eventTypeDoc) {
        roleType.find({},{},function(e,roleTypeDoc) {
            res.render('insertEvent', { 
                titlePage: "FaceCast | Ajout d'un évènement",
                header: "Ajout d'un évènement", 
                regionlist: obj,
                eventtypelist : eventTypeDoc,
                roletypelist : roleTypeDoc
            });
        });
    });
});

/* Ajout d'un événement et d'un rôle ainsi que de la liaison entre les deux (association) */
router.post('/addEvent', function(req, res) {
    var eventName = req.body.eventName;
    var eventDate = req.body.eventDate;
    var eventNbDays = req.body.eventNbDays;
    var eventRegion = req.body.eventRegion;
    var eventCity = req.body.eventCity;
    var eventType = req.body.eventType;
    var eventRoleId = req.body.eventRoleType;
    var eventRoleName = req.body.eventRole;

    var newEvent = new event({
        "name" : eventName,
        "date" : eventDate,
        "numberDays" : eventNbDays,
        "department" : eventRegion,
        "city" : eventCity,
        "_eventType": eventType
    });

    var newRole = new role({
        "name" : eventRoleName,
        "_roleType" : eventRoleId
    });

    var newEventRole = new assocEventRole({
        "_event" : newEvent,
        "_role" : newRole
    });

    newEvent.save(function(err, doc) {
        newRole.save(function(err, doc) {
            newEventRole.save(function(err, doc) {
                if(err) {
                    res.send("Insertion error..");
                } else {
                    res.redirect("/events");
                }
            });
        });
    });
});

module.exports = router;