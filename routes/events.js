var express = require('express');
var router = express.Router();
var event = require('../models/event');

router.get('/', function(req, res, next) {
    event.find({},{},function(e,docs){
        res.render('events', {
            "titlePage" : "Liste des événements",
            "header" : "Liste des événements",
            "eventlist" : docs
        });
    });
});

router.delete('/')

module.exports = router;