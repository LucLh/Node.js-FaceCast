var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventType = require('../models/eventType');
  
// create a new user called chris
var film = new eventType({
  type: 'film'
});

var spectacle = new eventType({
  type: 'spectacle'
});

var serie = new eventType({
  type: 'série'
});

film.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new event type is ' + type);
});

spectacle.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new event type is ' + type);
});

serie.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new event type is ' + type);
});

film.save(function(err) {
  if (err) throw err;

  console.log('Event type saved successfully!');
});

spectacle.save(function(err) {
  if (err) throw err;

  console.log('Event type saved successfully!');
});

serie.save(function(err) {
  if (err) throw err;

  console.log('Event type saved successfully!');
});