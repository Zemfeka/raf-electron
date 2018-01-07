var express = require('express');
var router = express.Router();
var booking = require('../models/booking');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        booking.getbookingById(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        booking.getAllApointments(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});

router.post('/', function(req, res, next) {
    booking.addbooking(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

router.delete('/:id', function(req, res, next) {
    booking.deletebooking(req.params.id, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});

router.put('/', function(req, res, next) {
    booking.updatebooking(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});

module.exports = router;