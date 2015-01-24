var settings = require('./settings'),
    server   = require(settings.rootPath + '/server');

var goodOptions = {
  opsInterval: 5000,
  reporters: [{
    reporter: require('good-console'),
    args: [{ ops: '*', request: '*', log: '*', response: '*', 'error': '*' }]
  }]
};

var assetOptions = require(settings.rootPath + '/assets');

server.register([
  {
    register: require('good'),
    options: goodOptions
  },
  {
    register: require('hapi-assets'),
    options: assetOptions
  },
  {
    register: require('hapi-named-routes')
  },
  {
    register: require('hapi-cache-buster')
  }
], function(err) {
  if (err) {
    console.error('Failed to load a plugin: ' + err);
    throw err;
  }
});
