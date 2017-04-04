var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateRequestSchema = Schema({
    'state' : String
});

module.exports = mongoose.model('stateRequest',stateRequestSchema,'stateRequest');