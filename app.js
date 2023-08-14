require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);
    console.log('Conecto a mongodb');
  } catch (error) {
    console.error(error);
    console.log('No conecto a mongodb');
  }
})();
// Rutas front-end
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.resolve(__dirname, 'views', 'signup')));
app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles')));
app.use('/components', express.static(path.resolve(__dirname, 'views', 'components')));
module.exports = app;