var express = require('express');
var router = express.Router();
var User = require('../models/users');
//var express = require('passport');
//var jwt = require('jsonwebtoken');

//Register
router.post('/register', function(req, res, next) {
  res.send('Register');
});


//PROFILE
router.get('/profile', function(req, res, next) {
  if (req.params.id) {
    User.getUserById(req.params.id, function(err, rows) {
          if (err)
              res.json(err);
          else
              res.json(rows);
      })
  } else {
      User.getAllUsers(function(err, rows) {
          if (err)
              res.json(err);
          else
              res.json(rows);
      })
  }
});

router.post('/authenticate', function(req, res, next) {
    User.authenticateUser(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
  
        
      })
      
});


module.exports = router;
