var db = require('../dbconnection');
var attorney = {

    getAttorneyByBookingId: function(bookingId, callback) {
        return db.query("select * from attorneys where BookingId=?", [bookingId], callback);
    },

    addAttorney: function(attorney, callback) {
        return db.query("insert into attorneys(BookingId,ClientName, ContactPerson, PhoneNumber,Email) VALUES(?,?,?,?,?)", [attorney.BookingId, attorney.ClientName, attorney.ContactPerson, attorney.PhoneNumber, attorney.Email], callback);
    },

    updateAttorney: function(attorney, callback) {
        return db.query("update attorneys set ContactPerson=?, PhoneNumber=?,Email=? where Id=?", [attorney.ContactPerson, attorney.PhoneNumber, attorney.Email, attorney.Id], callback);
    },

    deleteAttorney: function(attorney, callback) {
        return db.query("delete from attorneys wehre Id=?", [attorney.Id], callback);
    }
}
module.exports = attorney;