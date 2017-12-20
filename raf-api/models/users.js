var db = require('../dbconnection');
var Users = {
    
        getAllUsers: function(callback) {
            return db.query("select * from users", callback);

        },
        getUserById: function(id, callback) {
            return db.query("select * from users where Id=?", [id], callback);
        },
        authenticateUser: function(user,callback){
            return db.query("select * from users where email=? and password=?",[user.username, user.password], callback);
        }
    };
    
    module.exports = Users;