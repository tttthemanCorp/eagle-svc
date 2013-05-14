
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.configure(function(){
    app.set('port', process.env.PORT || 8080);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// development environment only
app.configure('development', function(){
    app.use(express.errorHandler());
});

// routing table
app.get('/user', routes.getAllUsers);
app.post('/user', routes.createUser);
app.put('/user', routes.bulkUpdateUsers);
app.delete('user', routes.deleteAllUsers);
app.get('/user/:id', routes.getUser);
app.put('/user/:id', routes.updateUser);
app.delete('/user/:id', routes.deleteUser);

// starting server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
