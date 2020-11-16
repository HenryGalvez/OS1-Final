"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://54.236.17.217:80/angular-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Database is Connected');
})["catch"](function (err) {
  return console.log(err);
});