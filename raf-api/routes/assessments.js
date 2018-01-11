var express = require('express');
var router = express.Router();
var assessment = require('../models/assessments');

//get assessments
router.get('/get', function(req, res, next) {
    if (req.params.id) {
        assessment.getAssessmentById(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        assessment.getAllAssessments(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
  });

  router.post('/add', function(req, res, next) {
    assessment.addAssessments(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

  router.put('/update', function(req, res, next) {
    assessment.updateAssessments(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});
  module.exports = router;