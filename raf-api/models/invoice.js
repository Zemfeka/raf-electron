var db = require('../dbconnection');
var invoice = {

    getAllInvoices: function(callback) {
        return db.query("select i.*, bu.Id BusinessId, bu.Name BusinessName, bu.RegistrationNumber BusinessRegistrationNumber, bu.VatNumber BusinessVatNumber ,r.Id ReportId, r.Notes ReportNotes,r.UserId ReportUserId, r.Notes ReportNotes, r.UserId ReportUserId, r.BookingId ReportBookingId,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, b.Reference BookingRef,TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join invoices i on i.BookingId = b.Id left join businesses bu on bu.Id = i.InvoiceBusinessId", callback);
    },
    getInvoiceById: function(id, callback) {
        return db.query("select i.*, bu.Id BusinessId, bu.Name BusinessName, bu.RegistrationNumber BusinessRegistrationNumber, bu.VatNumber BusinessVatNumber ,r.Id ReportId, r.Notes ReportNotes,r.UserId ReportUserId, r.Notes ReportNotes, r.UserId ReportUserId, r.BookingId ReportBookingId,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId,b.ClientName, b.ClaimentFirstName,b.ClaimentLastName,b.BookingDate, b.Reference BookingRef,TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join invoices i on i.BookingId = b.Id left join businesses bu on bu.Id = i.InvoiceBusinessId where i.Id=?", [id], callback);
    },
    getInvoiceByBookingId: function(id, callback) {
        return db.query("select i.*,att.ClientName,att.ContactPerson,att.Email,att.PhoneNumber,att.Address,att.City,att.PostalCode, bu.Id BusinessId, bu.Name BusinessName, bu.RegistrationNumber BusinessRegistrationNumber, bu.VatNumber BusinessVatNumber,bu.Qualification,bu.QualificationHolder,bu.VendorNumber,bu.HpcsaRegistrationNumber,r.Id ReportId, r.Notes ReportNotes,r.UserId ReportUserId, r.Notes ReportNotes, r.UserId ReportUserId, r.BookingId ReportBookingId,a.Id AssessmentId, a.Notes AssessmentNotes, a.UserId AssessmentUserId, a.BookingId AssessmentBookingId, a.ShowNoShow AssessmentShowNoShow ,b.Id BookingId, b.ClaimentFirstName,b.ClaimentLastName,b.ClaimentIdNumber,b.ClaimentContactNumber,b.BookingDate, b.Reference BookingRef, b.RafReference, b.LinkNumber ,TIME(`BookingDate`) Time from bookings b inner join assessments a on a.BookingId = b.id left join reports r on r.BookingId = b.id left join invoices i on i.BookingId = b.Id left join businesses bu on bu.Id = r.BusinessId left join attorneys att on att.BookingId = b.Id where b.Id=?", [id], callback);
    },
    getinvoiceitemsByInvoiceId: function(invoiceId, callback) {
        return db.query("select * from invoiceitems where InvoiceId=?", [invoiceId], callback);
    },
    addInvoices: function(report, callback) {
        return db.query("INSERT INTO invoices (Number,InvoiceDate,Total,UserId,BookingId,InvoiceBusinessId) VALUES (?,?,?,?,?,?)", [report.BookingRef, report.InvoiceDate, report.Total, report.UserId, report.BookingId, 1], callback);
    },
    addInvoiceItems: function(report, callback) {
        return db.query("INSERT INTO invoiceitems (Quantity,Name,Description,Price,SubTotal,InvoiceId) VALUES (?,?,?,?,?,?)", [report.Quantity, report.Name, report.Description, report.Price, report.SubTotal, report.InvoiceId], callback);
    },
    updateInvoiceitems: function(report, callback) {
        return db.query("update invoiceitems set Quantity=?,Name=?,Description=?,Price=?,SubTotal=? where Id = ?", [report.Quantity, report.Name, report.Description, report.Price, report.SubTotal, report.Id], callback);
    },
    updateInvoices: function(report, callback) {
        return db.query("update invoices set Number=?,Total=? where Id = ?", [report.BookingRef, report.Total, report.Id], callback);
    }
};

module.exports = invoice;