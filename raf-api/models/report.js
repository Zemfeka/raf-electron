var db = require('../dbconnection');
var report = {

    getAllReports: function(callback) {
        return db.query("select att.CaseType,d.DocumentType, r.*,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate,b.Reference,b.RafReference,b.LinkNumber, TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join documents d on d.BookingId = b.Id left join attorneys att on att.BookingId = b.Id where d.DocumentType in ('Draft Medico Report','Preliminary Medico Report','Finale Medico Report') union select att.CaseType,d.DocumentType, r.*,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, b.Reference,b.RafReference,b.LinkNumber, TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join documents d on d.BookingId = b.Id left join attorneys att on att.BookingId = b.Id where (d.DocumentType not in ('Draft Medico Report','Preliminary Medico Report','Finale Medico Report') or d.DocumentType is null) and b.Id not in (select b.Id from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join documents d on d.BookingId = b.Id where d.DocumentType in ('Draft Medico Report','Preliminary Medico Report','Finale Medico Report'))", callback);
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