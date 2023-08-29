const PAGE_URL = process.env.NODE_ENV === 'production'
  ? 'https://todo-list-prueba-cczt.onrender.com'
  : 'http://localhost:3000';

const MONGO_URI = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URI_PROD
  : process.env.MONGO_URI_DEV;

module.exports = { PAGE_URL, MONGO_URI };