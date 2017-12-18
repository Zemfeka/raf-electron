var db = require('../dbconnection');
var Appointment = {

    getAllApointments: function(callback) {
        return db.query("select * from appointments", callback);
    },
    getAppointmentById: function(id, callback) {
        return db.query("select * from appointments where Id=?", [id], callback);
    },
    addAppointment: function(Appointment, callback) {
        return db.query("INSERT INTO `test`.`appointments`(`Id`,`ClientName`,`ClaimentFirstName`,`ClaimentLastName`,`AppointmentDate`,`CreatedDate`,`CreatedByID`,`UpdatedDate`,`UpdatedByID`) VALUES (?,?,?,?,?,?,?,?,?)", [Appointment.Id, Appointment.ClientName, Appointment.ClaimentFirstName, Appointment.ClaimentLastName, Appointment.AppointmentDate, Appointment.CreatedDate, Appointment.CreatedByID, Appointment.UpdatedDate, Appointment.UpdatedByID], callback);
    },
    deleteAppointment: function(id, callback) {
        return db.query("delete from appointments where Id=?", [id], callback)
    },
    updateAppointment: function(id, Appointment, callback) {
        return db.query("update appointments set UpdatedDate=?, UpdatedByID=? where Id=?", [Appointment.UpdatedDate, Appointment.UpdatedByID, id], callback);
    }
};

module.exports = Appointment;