var express = require('express');
var router = express.Router();
var report = require('../models/report');

//get report
router.get('/get', function(req, res, next) {
    if (req.params.id) {
        report.getReportById(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        report.getAllReports(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
  });

  router.post('/add', function(req, res, next) {
    report.addReports(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

  router.put('/update', function(req, res, next) {
    report.updateReports(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});
  module.exports = router;