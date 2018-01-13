var express = require('express');
var router = express.Router();
var invoice = require('../models/invoice');

//get report
router.get('/get', function(req, res, next) {
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

  router.post('/add', function(req, res, next) {
    invoice.addInvoices(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

  router.put('/update', function(req, res, next) {
    invoice.updateInvoices(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});
  module.exports = router;