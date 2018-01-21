var db = require('../dbconnection');
var attorney = {

    getAttorneyByBookingId: function(bookingId, callback) {
        return db.query("select * from attorneys where BookingId=?", [bookingId], callback);
    },
    getAttorneyNames: function(callback) {
        return db.query("select ClientName from attorneys", callback);
    },
    addAttorney: function(attorney, callback) {
        return db.query("insert into attorneys(CaseType,BookingId,ClientName, ContactPerson, PhoneNumber,Email,Address,City,PostalCode) VALUES(?,?,?,?,?,?,?,?,?)", [attorney.CaseType, attorney.BookingId, attorney.ClientName, attorney.ContactPerson, attorney.PhoneNumber, attorney.Email, attorney.Address, attorney.City, attorney.PostalCode], callback);
    },

    updateAttorney: function(attorney, callback) {
        return db.query("update attorneys set CaseType=?,ContactPerson=?, PhoneNumber=?,Email=?,Address=?,City=?,PostalCode=?,ClientName=? where Id=?", [attorney.CaseType, attorney.ContactPerson, attorney.PhoneNumber, attorney.Email, attorney.Address, attorney.City, attorney.PostalCode, attorney.ClientName, attorney.Id], callback);
    },

    deleteAttorney: function(bookingId, callback) {
        return db.query("delete from attorneys where BookingId=?", [bookingId], callback);
    }
}
module.exports = attorney;