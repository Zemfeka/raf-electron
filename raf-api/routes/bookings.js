var express = require('express');
var router = express.Router();
var booking = require('../models/booking');
var multer = require('multer');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

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

router.post('/uploadDocumentFileSystem', function(req, res, next) {
    console.log(console.log(req.file));
    upload(req, res, function(err) {
        console.log(req.file);
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});

module.exports = router;