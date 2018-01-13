var db = require('../dbconnection');
var report = {

    getAllReports: function(callback) {
        return db.query("select r.*,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id", callback);
    },
    getReportById: function(id, callback) {
        return db.query("select * from reports where Id=?", [id], callback);
    },
    addReports: function(report, callback) {
        return db.query("INSERT INTO reports(Notes,UserId,BookingId) VALUES (?,?,?)", [report.Notes, report.UserId, report.BookingId], callback);
    },
    updateReports: function(report, callback) {
        return db.query("update reports set Notes=?,UserId=?,BookingId=? where Id = ?", [report.Notes, report.UserId, report.BookingId, report.Id], callback);
    }
};

module.exports = report;