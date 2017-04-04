var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    'name' : String,
    'date' : String,
    'numberDays' : String,
    'department' : String,
    'city' : String,
    '_eventType' : {type: Schema.Types.ObjectId, ref:'eventType'}
});

module.exports = mongoose.model('event',eventSchema,'event');