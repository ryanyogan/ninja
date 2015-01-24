var path = require('path');

module.exports = {
  rootPath: path.normalize(__dirname + '/../..'),
  port: parseInt(process.env.PORT, 10) || 3000,
  host: '0.0.0.0'
};
