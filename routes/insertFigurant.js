var express = require('express');
var router = express.Router();
var figurant = require('../models/figurant');

/* GET Insert figurant page. */
router.get('/', function(req,res,next) {
    res.render('insertFigurant', { titlePage: "FaceCast | Ajout d'un figurant", header: "Ajout d'un figurant" });
});

/* Ajout d'un figurant */
router.post('/addFigurant', function(req,res) {
    var firstname = req.body.figurantFirstname;
    var lastname = req.body.figurantLastname;
    var age = req.body.figurantAge;
    var address = req.body.figurantAddress;
    var email = req.body.figurantEmail;

    newFigurant = new figurant({
        "firstname": firstname,
        "lastname": lastname,
        "age": age,
        "address": address,
        "email": email
    });

    newFigurant.save(function(err,doc) {
        if(err) {
            res.send('Error..');
        } else {
            res.redirect("/figurants");
        }
    });
});

module.exports = router;