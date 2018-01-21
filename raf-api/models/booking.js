var db = require('../dbconnection');
var booking = {

    getAllApointments: function(callback) {
        return db.query("select b.*,a.CaseType from bookings b left join attorneys a on a.BookingId=b.Id", callback);
    },
    getbookingById: function(id, callback) {
        return db.query("select * from bookings where Id=?", [id], callback);
    },
    addbooking: function(booking, callback) {
        return db.query("insert into bookings (ClaimentIdNumber,ClaimentContactNumber, Reference, ClientName,ClaimentFirstName,ClaimentLastName,BookingDate,CreatedDate,CreatedByID,UpdatedDate,UpdatedByID,TrialDate,RequestedReportDate,Time,RafReference,LinkNumber) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [booking.ClaimentIdNumber, booking.ClaimentContactNumber, booking.Reference, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.CreatedDate, booking.CreatedByID, booking.UpdatedDate, booking.UpdatedByID, booking.TrialDate, booking.RequestedReportDate, booking.Time, booking.RafReference, booking.LinkNumber], callback);
    },
    deletebooking: function(id, callback) {
        return db.query("delete from bookings where Id=?", [id], callback)
    },
    updatebooking: function(booking, callback) {
        return db.query("update bookings set ClaimentIdNumber=?,ClaimentContactNumber=?,Reference=?,UpdatedDate=?, UpdatedByID=?, ClientName=?,ClaimentFirstName=?,ClaimentLastName=?,BookingDate=?, TrialDate=?,RequestedReportDate=?,Time=?, RafReference=?, LinkNumber=? where Id=?", [booking.ClaimentIdNumber, booking.ClaimentContactNumber, booking.Reference, booking.UpdatedDate, booking.UpdatedByID, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.TrialDate, booking.RequestedReportDate, booking.Time, booking.RafReference, booking.LinkNumber, booking.Id], callback);
    },
    uploadDocument: function(document, callback) {
        return db.query("insert into documents(BookingId, DocumentName, DocumentType, DocumentExtension, Contents, Path) values(?,?,?,?,?,?)", [document.BookingId, document.DocumentName, document.DocumentType, document.DocumentExtension, document.Contents, document.Path], callback);
    },
    getDocuments: function(bookingId, callback) {
        return db.query("select * from documents where BookingId=?", [bookingId], callback);
    },
    deleteDocumentByBooking: function(bookingId, callback) {
        return db.query("delete from documents where BookingId=?", [bookingId], callback);
    },
    deleteDocument: function(Id, callback) {
        return db.query("delete from documents where Id=?", [Id], callback);
    }
};

module.exports = booking;