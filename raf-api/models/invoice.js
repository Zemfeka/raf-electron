var db = require('../dbconnection');
var invoice = {

    getAllInvoices: function(callback) {
        return db.query("select i.*, bu.Id BusinessId, bu.Name BusinessName, bu.RegistrationNumber BusinessRegistrationNumber, bu.VatNumber BusinessVatNumber ,r.Id ReportId, r.Notes ReportNotes,r.UserId ReportUserId, r.Notes ReportNotes, r.UserId ReportUserId, r.BookingId ReportBookingId,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join invoices i on i.BookingId = b.Id left join businesses bu on bu.Id = i.InvoiceBusinessId", callback);
    },
    getInvoiceById: function(id, callback) {
        return db.query("select * from reports where Id=?", [id], callback);
    },
    getinvoiceitemsByInvoiceId: function(invoiceId, callback) {
        return db.query("select * from invoiceitems where InvoiceId=?", [invoiceId], callback);
    },
    addInvoices: function(report, callback) {
        return db.query("INSERT INTO reports(Notes,UserId,BookingId) VALUES (?,?,?)", [report.Notes, report.UserId, report.BookingId], callback);
    },
    updateInvoices: function(report, callback) {
        return db.query("update reports set Notes=?,UserId=?,BookingId=? where Id = ?", [report.Notes, report.UserId, report.BookingId, report.Id], callback);
    }
};

module.exports = invoice;