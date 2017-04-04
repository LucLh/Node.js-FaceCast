var express = require('express');
var router = express.Router();
var eventType = require('../models/eventType');

router.get('/', function(req,res,next) {
    //res.render('insertEventType', { titlePage: "FaceCast | Ajout d'un type d'évènement", header: "Ajout d'un type d'évènement" });
    eventType.find({},{},function(e,docs) {
        res.render('insertEventType', { 
            titlePage: "FaceCast | Ajout d'un type d'évènement", 
            header: "Ajout d'un type d'évènement", 
            eventtypelist : docs
        });
    });
});

/* Ajout d'un type d'événement */
router.post('/addEventType', function(req, res) {
    var eventTypeName = req.body.eventTypeName;

    var newEventType = new eventType({
        "type" : eventTypeName
    });
    
    newEventType.save(function(err, doc) {
        if(err) {
            res.send("Error");
        }
        else {
            res.redirect("/insertEventType");
        }
    });
});

/* Suppression d'un événement */
router.delete('/delete/:id', function(req,res,next) {
    var id = req.params.id;
    
    eventType.remove({'_id': id}, function(err){
        if(err){
            res.send('Erreur lors de la suppression..');
        } else {
            res.send('Suppression réussie !');
        }
    });
});

module.exports = router;