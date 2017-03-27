var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventRoleSchema = Schema({
    'event' : [{type: Schema.Types.ObjectId, ref:'event'}],
    'role' : [{type: Schema.Types.ObjectId, ref:'role'}]
});

module.exports = mongoose.model('eventRole', eventRoleSchema,'eventRole');