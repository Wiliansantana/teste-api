const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on: https://apitestes.herokuapp.com/api/v1/carro`);
});