var express = require('express');
var router = express.Router();
var booking = require('../models/booking');
var multer = require('multer');

// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({ dest: DIR }).single('photo');

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
            res.json(rows.insertId);
    })
});

router.post('/uploadDocument', function(req, res, next) {
    booking.uploadDocument(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

router.get('/getDocuments/:bookingId', function(req, res, next) {
    booking.getDocuments(req.params.bookingId, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
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

router.delete('/deleteDocumentBooking/:bookingId', function(req, res, next) {
    booking.deleteDocumentByBooking(req.params.bookingId, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});

router.delete('/deleteDocument/:Id', function(req, res, next) {
    booking.deleteDocument(req.params.Id, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});

module.exports = router;