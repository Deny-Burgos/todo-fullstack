require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_DEV);
    console.log('Conecto a mongodb');
  } catch (error) {
    console.error(error);
    console.log('No conecto a mongodb');
  }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Rutas front-end
app.use('/', express.static(path.resolve(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.resolve(__dirname, 'views', 'signup')));
app.use('/login', express.static(path.resolve(__dirname, 'views', 'login')));
app.use('/styles', express.static(path.resolve(__dirname, 'views', 'styles')));
app.use('/components', express.static(path.resolve(__dirname, 'views', 'components')));
app.use('/images', express.static(path.resolve('img')));

app.use(morgan('tiny'));

// Rutas Back-end
app.use('/api/users', usersRouter);

module.exports = app;