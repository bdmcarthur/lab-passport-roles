'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,

  },
  passwordHash: {
    type: String,
  },
  role: {
    type: String,
    enum: [ 'boss', 'developer', 'TA' ],
    default: 'developer'
  }
});

const addStatic = require('./user-new-user-static');
schema.statics.addStatic = addStatic;

const User = mongoose.model('User', schema);

module.exports = User;
