var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var askRoleSchema = Schema({
    '_id' : Number,
    'figurant' : [{type: Schema.Types.ObjectId, ref:'figurant'}],
    'role' : [{type: Schema.Types.ObjectId, ref:'role'}],
    'event' : [{type: Schema.Types.ObjectId, ref:'event'}],
    'stateRequest' : [{type: Schema.Types.ObjectId, ref:'stateRequest'}]
});

module.exports = mongoose.model('askRole',askRoleSchema,'askRole');