var express = require('express');
var router = express.Router();
var attorney = require('../models/attorney');

router.get('/:bookingId?', function(req, res, next) {
    if (req.params.bookingId) {
        attorney.getAttorneyByBookingId(req.params.bookingId, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        attorney.getAttorneyNames(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});

// router.get('/getattorneynames', function(req, res, next) {
//     attorney.getAttorneyNames(function(err, rows) {
//         if (err)
//             res.json(err);
//         else
//             res.json(rows);
//     })
// });

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

router.delete('/:bookingId', function(req, res, next) {
    attorney.deleteAttorney(req.params.bookingId, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});
module.exports = router;