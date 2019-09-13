'use strict';

module.exports = function(email, password, role) {
  const Model = this;  
  Model.create({
        email,
        password,
        role: 
      })
    .then(user => {
      console.log('YOU CREATED')
      return Promise.resolve(user);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(new Error('There was an error in the sign up process.'));
    });
};