'use strict'
const mongoose = require('mongoose');
const User = require('./../models/user')

  mongoose.connect(`mongodb://localhost/boss`, { useNewUrlParser: true })
  .then(() => {
    User.create({role: 'boss'})
    // User.addNewUser({role: 'boss'})
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


