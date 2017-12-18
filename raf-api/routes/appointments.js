var express = require('express');
var router = express.Router();
var Appointment = require('../models/appointment');

router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        Appointment.getAppointmentById(req.params.id, function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    } else {
        Appointment.getAllApointments(function(err, rows) {
            if (err)
                res.json(err);
            else
                res.json(rows);
        })
    }
});

router.post('/', function(req, res, next) {
    Appointment.addAppointment(req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(req.body);
    })
});

router.delete('/:id', function(req, res, next) {
    Appointment.deleteAppointment(req.params.id, function(err, count) {
        if (err)
            res.json(err);
        else
            res.json(count);
    })
});

router.put('/:id', function(req, res, next) {
    Appointment.updateAppointment(req.params.id, req.body, function(err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
});

module.exports = router;