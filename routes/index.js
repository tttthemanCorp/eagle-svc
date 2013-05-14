
/*
 * GET home page.
 */

var user = require('./user');

var routingHandlers = {
    getAllUsers: function(req, res) {
        res.send("respond from getAllUsers");
    },
    bulkUpdateUsers: function(newUsers) {

    },
    deleteAllUsers: function() {

    },
    getUser: function(userId) {

    },
    createUser: function(newUser) {

    },
    updateUser: function(user) {

    },
    deleteUser: function(userId) {

    }
};

module.exports = routingHandlers;