var db = require('../dbconnection');
var booking = {

    getAllApointments: function(callback) {
        return db.query("select *, TIME(`BookingDate`) as Time from bookings", callback);
    },
    getbookingById: function(id, callback) {
        return db.query("select * from bookings where Id=?", [id], callback);
    },
    addbooking: function(booking, callback) {
        return db.query("INSERT INTO `test`.`bookings`(`Id`,`ClientName`,`ClaimentFirstName`,`ClaimentLastName`,`BookingDate`,`CreatedDate`,`CreatedByID`,`UpdatedDate`,`UpdatedByID`) VALUES (?,?,?,?,?,?,?,?,?)", [booking.Id, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.CreatedDate, booking.CreatedByID, booking.UpdatedDate, booking.UpdatedByID], callback);
    },
    deletebooking: function(id, callback) {
        return db.query("delete from bookings where Id=?", [id], callback)
    },
    updatebooking: function(booking, callback) {
        return db.query("update bookings set UpdatedDate=?, UpdatedByID=?, ClientName=?,ClaimentFirstName=?,ClaimentLastName=?,BookingDate=? where Id=?", [booking.UpdatedDate, booking.UpdatedByID, booking.ClientName, booking.ClaimentFirstName, booking.ClaimentLastName, booking.BookingDate, booking.Id], callback);
    }
};

module.exports = booking;