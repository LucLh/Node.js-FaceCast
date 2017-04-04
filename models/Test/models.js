var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var figurantSchema = Schema({
    '_id' : Number,
    'firstname' : String,
    'lastname' : String,
    'age' : Number,
    'address' : String,
    'email' : String
});

var askRoleSchema = Schema({
    '_id' : Number,
    'figurantID' : [{type: Schema.Types.ObjectId, ref:'figurant'}],
    'roleID' : [{type: Schema.Types.ObjectId, ref:'role'}],
    'eventID' : [{type: Schema.Types.ObjectId, ref:'event'}],
    'stateRequestID' : [{type: Schema.Types.ObjectId, ref:'stateRequest'}]
});

var stateRequestSchema = Schema({
    '_id' : Number,
    'state' : String
});

var eventSchema = Schema({
    '_id' : Number,
    'name' : String,
    'date' : Date,
    'department' : String,
    'city' : String,
    'eventTypeId' : [{type: Schema.Types.ObjectId, ref:'typeEvent'}]
});

var typeEventSchema = Schema({
    '_id' : Number,
    'type' : String
});

var eventRoleSchema = Schema({
    'eventId' : [{type: Schema.Types.ObjectId, ref:'event'}],
    'roleId' : [{type: Schema.Types.ObjectId, ref:'role'}]
});

var roleSchema = Schema({
    '_id' : Number,
    'name' : String,
    'typeRoleId' : [{type: Schema.Types.ObjectId, ref:'typeRole'}]
});

var typeRoleSchema = Schema({
    '_id' : Number,
    'type' : String
});

module.exports('figurant',figurantSchema);
module.exports('askRole',askRoleSchema);
module.exports('stateRequest',stateRequestSchema);
module.exports('event',eventSchema);
module.exports('typeEvent',typeEventSchema);
module.exports('eventRole', eventRoleSchema);
module.exports('role',roleSchema);
module.exports('typeRole',typeRoleSchema);