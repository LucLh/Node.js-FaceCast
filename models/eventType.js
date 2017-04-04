var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventTypeSchema = new Schema({
    'type' : String
});

module.exports = mongoose.model('eventType',eventTypeSchema,'eventType');