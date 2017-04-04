var express = require('express');
var router = express.Router();
var roleType = require('../models/roleType');

/* GET Insert role type page. */
router.get('/', function(req,res,next) {
    roleType.find({},{},function(e,docs) {
        res.render('insertRoleType', { 
            titlePage: "FaceCast | Ajout d'un type de rôle", 
            header: "Ajout d'un type de rôle",
            roletypelist : docs
        });
    });
});

/* Ajout d'un type de rôle */
router.post('/addRoleType', function(req,res) {
    var roleTypeName = req.body.roleTypeName;

    newRoleType = new roleType({
        "type": roleTypeName
    });

    newRoleType.save(function(err,doc) {
        if(err) {
            res.send('Error..');
        } else {
            res.redirect("/insertRoleType");
        }
    });
});

/* Suppression d'un type de rôle */
router.delete('/delete/:id', function(req,res,next) {
    var id = req.params.id;
    
    roleType.remove({'_id': id}, function(err){
        if(err){
            res.send('Erreur lors de la suppression..');
        } else {
            res.send('Suppression réussie !');
        }
    });
});

module.exports = router;