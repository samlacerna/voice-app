var app = require('./server');
var config = require('./config');
var http = require('http');

// Create HTTP server and mount Express app
var server = http.createServer(app);
server.listen(config.port, function() {
    console.log('The magic happens on port '+config.port);
});