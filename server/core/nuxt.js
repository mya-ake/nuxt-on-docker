const { Nuxt } = require('nuxt');
const config = require('./../../nuxt.config.js');

config.dev = !['production'].includes(process.env.NODE_ENV);

const nuxt = new Nuxt(config);

module.exports = {
  nuxt,
  config,
};
