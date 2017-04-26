var express = require('express');
var router = express.Router();
var figurant = require('../models/figurant');
var assocEventRole = require('../models/eventRole');
var stateRequest = require('../models/stateRequest');
var askRole = require('../models/askRole');

/* GET Insert postulation page. */
router.get('/', function(req,res,next) {
    figurant.find({},{},function(err,figurantlist) {
        assocEventRole.find({},{},function(err,eventrolelist) {
            stateRequest.find({},{},function(err,statelist) {
                res.render('insertPostulation', { 
                    titlePage: "FaceCast | Ajout d'une Postulation", 
                    header: "Ajout d'une demande",
                    figurantlist: figurantlist,
                    eventrolelist: eventrolelist,
                    statelist: statelist
                });
            });
        }).populate('_role').populate({ path: '_role', populate: {path:'_roleType', model:'roleType'} })
        .populate('_event').populate({ path: '_event', populate: {path:'_eventType', model:'eventType'} });
    });
});

/* Ajout d'une demande */
router.post('/addPostulation', function(req,res) {
    var figurantName = req.body.figurant;
    var role = req.body.role;
    var event = req.body.event;
    var state = req.body.state;

    newPostulation = new askRole({
        "_figurant": figurantName,
        "_role": role,
        "_event": event,
        "_stateRequest": state
    });

    newPostulation.save(function(err,doc) {
        if(err) {
            res.send('Error..');
        } else {
            res.redirect("/postulations");
        }
    });
});

module.exports = router;