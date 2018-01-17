var db = require('../dbconnection');
var Users = {

    getAllUsers: function(callback) {
        return db.query("select * from users", callback);

    },
    getUserById: function(id, callback) {
        return db.query("select * from users where Id=?", [id], callback);
    },
    authenticateUser: function(user, callback) {
        return db.query("select * from users where Email=? and Password=?", [user.username, user.password], callback);
    },
    adduser: function(user, callback) {
        return db.query("INSERT INTO users(FullName,Email,Password) VALUES (?,?,?)", [user.FullName, user.Email, user.Password], callback);
    },
    updateuser: function(user, callback) {
        return db.query("update users set FullName=?,Email=?,Password=? where Id = ?", [user.FullName, user.Email, user.Password, user.Id], callback);
    }
};

module.exports = Users;