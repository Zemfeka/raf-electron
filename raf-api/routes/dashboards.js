var express = require('express');
var router = express.Router();
var dashboard = require('../models/dashboard');

router.get('/getBookingCount', function(req, res, next) {
        dashboard.getBookingCount(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows[0].bookingCount);
        })
    
  });

  router.get('/getTodayBookingCount', function(req, res, next) {
        dashboard.getTodayBookingCount(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows[0].todayBookingCount);
        })
    
  });

  router.get('/getBookingsWithoutAssessmentCount', function(req, res, next) {
        dashboard.getBookingsWithoutAssessmentCount(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows[0].bookingsWithoutAssessmentCount);
        })

  });

  router.get('/getAssessmentsWithoutReports', function(req, res, next) {
        dashboard.getAssessmentsWithoutReports(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows[0].assessmentsWithoutReports);
        })

  });
  module.exports = router;