// const http = require('node:http'); //commonjs
import http from 'node:http'; //module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>Hello World</h1> <p>This is Server</p>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});