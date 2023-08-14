const app = require('./app');
const htpp = require('http');

const server = htpp.createServer(app);

server.listen(3000, () => {
  console.log('El servidor esta corriendo en el puerto 3000');
  console.log('http://localhost:3000/');
});