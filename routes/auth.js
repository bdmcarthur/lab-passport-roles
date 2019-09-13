'use strict';

const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.get('/add', (req, res, next) => { 
  res.render('add');
});

router.post('/add', passport.authenticate('add-user', {
    successRedirect: "/add",
    failureRedirect: "/"
  }));
  

module.exports = router;
