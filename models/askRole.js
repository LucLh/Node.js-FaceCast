var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var askRoleSchema = Schema({
    '_figurant' : {type: Schema.Types.ObjectId, ref:'figurant'},
    '_role' : {type: Schema.Types.ObjectId, ref:'role'},
    '_event' : {type: Schema.Types.ObjectId, ref:'event'},
    '_stateRequest' : {type: Schema.Types.ObjectId, ref:'stateRequest'}
});

module.exports = mongoose.model('askRole',askRoleSchema,'askRole');