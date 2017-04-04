var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleTypeSchema = new Schema({
    'type' : String
});

module.exports = mongoose.model('roleType',roleTypeSchema,'roleType');