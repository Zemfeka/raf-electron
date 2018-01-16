var db = require('../dbconnection');
var booking = {

    getAllApointments: function(callback) {
        return db.query("select * from bookings", callback);
    },
    getbookingById: function(id, callback) {
        return db.query("select * from bookings where Id=?", [id], callback);
    },
    addbooking: function(booking, callback) {
        return db.query("insert into bookings (Reference, ClientName,ClaimentFirstName,ClaimentLastName,BookingDate,CreatedDate,CreatedByID,UpdatedDate,UpdatedByID,TrialDate,RequestedReportDate,Time) values (?,?,?,?,?,?,?,?,?,?,?,?)", [booking.Reference, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.CreatedDate, booking.CreatedByID, booking.UpdatedDate, booking.UpdatedByID, booking.TrialDate, booking.RequestedReportDate, booking.Time], callback);
    },
    deletebooking: function(id, callback) {
        return db.query("delete from bookings where Id=?", [id], callback)
    },
    updatebooking: function(booking, callback) {
        return db.query("update bookings set Reference=?,UpdatedDate=?, UpdatedByID=?, ClientName=?,ClaimentFirstName=?,ClaimentLastName=?,BookingDate=?, TrialDate=?,RequestedReportDate=?,Time=? where Id=?", [booking.Reference, booking.UpdatedDate, booking.UpdatedByID, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.TrialDate, booking.RequestedReportDate, booking.Time, booking.Id], callback);
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