var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = Schema({
    '_id' : Number,
    'name' : String,
    'roleType' : [{type: Schema.Types.ObjectId, ref:'roleType'}]
});

module.exports = mongoose.model('role',roleSchema,'role');