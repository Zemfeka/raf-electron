var express = require('express');
var router = express.Router();
var attorney = require('../models/attorney');

router.get('/:bookingId?', function(req, res, next) {
    attorney.getAttorneyByBookingId(req.params.bookingId, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});

router.post('/', function(req, res, next) {
    attorney.addAttorney(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

router.put('/', function(req, res, next) {
    attorney.updateAttorney(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});

router.delete('/', function(req, res, next) {
    attorney.deleteAttorney(req.body, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});
module.exports = router;