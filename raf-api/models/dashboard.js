var db = require('../dbconnection');
var dashboard = {

    getBookingCount: function(callback) {
        return db.query("SELECT count(*) bookingCount FROM test.bookings b where b.BookingDate BETWEEN NOW() - 1 AND DATE_ADD(NOW(), INTERVAL 30 DAY);", callback);
    },
    getTodayBookingCount: function(callback) {
        return db.query("SELECT count(*) todayBookingCount FROM test.bookings b where b.BookingDate = curdate();", callback);
    },
    getBookingsWithoutAssessmentCount: function(callback) {
        return db.query("select count(*) bookingsWithoutAssessmentCount from bookings b left join assessments a on b.id = a.BookingId where a.id is null;", callback);
    },
    getAssessmentsWithoutReports: function(callback) {
        return db.query("select count(*) assessmentsWithoutReports  from bookings b inner join assessments a on b.id = a.BookingId left join reports r on r.bookingid = b.id where r.id is null;", callback);
    },
};

module.exports = dashboard;