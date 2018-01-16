//require express library
var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';

const fs = require('fs');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        cb(null, DIR);
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({
    storage: storage
}).single('file');

//our file upload function.
router.post('/', function(req, res, next) {
    var path = '';
    upload(req, res, function(err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("upload Error occured")
        }
        // No error occured.
        path = req.file.path;
        return res.send(path);
    });
})

router.post('/download', function(req, res, next) {
    var data = "";
    data = req.body;

    var stat = fs.statSync(data.path);
    var fileToSend = fs.readFileSync(data.path);
    res.set('Content-Type', data.type);
    res.set('Content-Length', stat.size);
    res.set('Content-Disposition', data.filename);
    res.send(fileToSend);
    //res.json(path);
    //res.download(path.path, path.filename);
    // fs.open(path.path, 'r', (err, fd) => {
    //     if (err) throw err;
    //     fs.close(fd, (err) => {
    //         if (err) throw err;
    //     });
    // });
})
module.exports = router;