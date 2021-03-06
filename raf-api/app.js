var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var bookings = require('./routes/bookings');
var assessments = require('./routes/assessments');
var attorneys = require('./routes/attorneys');
var reports = require('./routes/reports');
var invoices = require('./routes/invoices');
var dashboards = require('./routes/dashboards');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', index);
app.use('/users', users);
app.use('/bookings', bookings);
app.use('/assessments', assessments);
app.use('/attorneys', attorneys);
app.use('/reports', reports);
app.use('/invoices', invoices);
app.use('/dashboards', dashboards);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;