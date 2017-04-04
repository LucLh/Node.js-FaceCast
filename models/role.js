var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = Schema({
    'name' : String,
    '_roleType' : {type: Schema.Types.ObjectId, ref:'roleType'}
});

module.exports = mongoose.model('role',roleSchema,'role');