var express = require('express');
var router = express.Router();
var requestRole = require('../models/askRole');

/* GET request role page. */
router.get('/', function(req, res, next) {
    requestRole.find({},{},function(err,requestlist) {
        res.render('askRole', {
            header: 'Demandes de postulation', 
            title: 'Demandes en attente de validation',
            titlePage: 'FaceCast | Demandes de postulations',
            requestlist: requestlist
        });
    });
});

module.exports = router;