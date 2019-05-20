const express = require('express');
const { nuxt } = require('./core/nuxt');

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'ok', env: process.env.NODE_ENV });
});
app.use(nuxt.render);

module.exports.app = app;
