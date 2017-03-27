var express = require('express');
var router = express.Router();
var event = require('../models/event');
var fs = require('fs');

router.get('/', function(req,res,next) {
    var contenu = fs.readFileSync("public/json/region.json", "UTF-8");
    var region = JSON.parse(contenu);
    var obj = region.regionInfo;
    res.render('insertEvent', { titlePage: "FaceCast | Ajout d'un événement", header: "Ajout d'un événement", regionlist: obj});
});

router.post('/addEvent', function(req, res) {
    var eventName = req.body.eventName;
    var eventDate = req.body.eventDate;
    var eventRegion = req.body.eventRegion;
    var eventCity = req.body.eventCity;
    var eventType = req.body.eventType;

    var newEvent = new event({
        "name" : eventName,
        "date" : eventDate,
        "department" : eventRegion,
        "city" : eventCity
    });

    newEvent.save(function(err, doc) {
        if(err) {
            res.send("Insertion error..");
        }
        else {
            res.redirect("/events");
        }
    })
});

module.exports = router;