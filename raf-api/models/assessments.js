var db = require('../dbconnection');
var Assessments = {
    
        getAllAssessments: function(callback) {
            return db.query("select a.*,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, TIME(`BookingDate`) Time from bookings b left join assessments a on a.BookingId = b.id", callback);
            //return db.query("select *, TIME(`BookingDate`) as Time from bookings", callback);
        },
        getAssessmentById: function(id, callback) {
            return db.query("select * from assessments where Id=?", [id], callback);
        },
        addAssessments: function(assessment, callback) {
            return db.query("INSERT INTO `test`.`assessments`(`Notes`,`UserId`,BookingId,`ShowNoShow`) VALUES (?,?,?,?)", [assessment.Notes, assessment.UserId, assessment.ShowNoshow], callback);
        },
        updateAssessments: function(assessment, callback) {
            return db.query("update assessments set `Notes`=?,`UserId`=?,`BookingId`=?,`ShowNoShow`=? where Id = ?", [assessment.Notes, assessment.UserId, assessment.BookingId,assessment.ShowNoShow, assessment.Id], callback);
        }
    };
    
    module.exports = Assessments;