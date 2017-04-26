var express = require('express');
var router = express.Router();
var fs = require('fs');
var event = require('../models/event');

router.get('/events', function(req,res,next) {
    var response = {};
    event.find({},{},function(err,events) {
        if (err) {
            response = {"error": true,"message" : "Error fetching data"};
        } else {
            response = {events};
        }
        res.json(response);
    })
});

module.exports = router;