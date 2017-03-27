var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    'name' : String,
    'date' : String,
    'department' : String,
    'city' : String,
    'eventType' : [{type: Schema.Types.ObjectId, ref:'eventType'}]
});

module.exports = mongoose.model('event',eventSchema,'event');