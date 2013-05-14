
/*
 * GET home page.
 */

var routingHandlers = {
    getAllUsers: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var output = {
            name: 'Wanchun',
            age: 60,
            credits: 100
        };
        res.write(JSON.stringify(output));
        res.end();
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