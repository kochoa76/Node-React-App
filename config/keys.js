//keys.js figure out what set of credentials to return

if (process.env.node_env === 'production') {
  // we are in production, return prod set of keys
  module.exports = require('./prod')
} else {
  // we are in development return dev keys
  module.exports = require('./dev');

}
