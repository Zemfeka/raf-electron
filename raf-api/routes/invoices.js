var express = require('express');
var router = express.Router();
var invoice = require('../models/invoice');

//get report
router.get('/get/:id?', function(req, res, next) {
    if (req.params.id) {
        invoice.getInvoiceById(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        invoice.getAllInvoices(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});

router.get('/getinvoicebybookingid/:id?', function(req, res, next) {
    if (req.params.id) {
        invoice.getInvoiceByBookingId(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});

router.get('/getinvoiceitems/:invoiceId?', function(req, res, next) {
    if (req.params.invoiceId) {
        invoice.getinvoiceitemsByInvoiceId(req.params.invoiceId, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});



router.post('/add', function(req, res, next) {
    invoice.addInvoices(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else {
            res.json(rows.insertId);
        }
    })
});

//invoice.addInvoiceItems(req.body, rows.insertId)
router.post('/addInvoiceitems', function(req1, res1, next1) {
    invoice.addInvoiceItems(req1.body, function(err1, rows1) {
        if (err1)
            res1.json(err1);
        else {
            res1.json(rows1);
        }
        console.log(req1.body)

    })
});

router.post('/updateInvoiceitems', function(req1, res1, next1) {
    invoice.updateInvoiceitems(req1.body, function(err1, rows1) {
        if (err1)
            res1.json(err1);
        else {
            res1.json(rows1);
        }
        console.log(req1.body);
        console.log("updateInvoiceitems err" + err1);


    })
});

router.put('/update', function(req, res, next) {

    invoice.updateInvoices(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else {
            res.json(res.body);
        }
        console.log("invoice update err: " + err);

    })
});
module.exports = router;