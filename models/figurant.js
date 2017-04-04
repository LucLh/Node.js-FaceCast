var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var figurantSchema = Schema({
    'firstname' : String,
    'lastname' : String,
    'age' : Number,
    'address' : String,
    'email' : String
});

module.exports = mongoose.model('figurant',figurantSchema,'figurant');