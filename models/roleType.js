var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleTypeSchema = Schema({
    '_id' : Number,
    'type' : String
});

module.exports = mongoose.model('roleType',roleTypeSchema,'roleType');