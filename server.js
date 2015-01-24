var Hapi   = require('hapi'),
    config = require('./server/config/settings');

var server = new Hapi.Server();

server.connection({ host: config.host, port: config.port });

server.views({
  engines: {
    html: require('swig')
  },
  path: './server/views'
});

module.exports = server;

// Bootstrap the plugins
require('./server/config/plugins');

// Add the server routes
server.route(require('./server/config/routes'));

server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});
