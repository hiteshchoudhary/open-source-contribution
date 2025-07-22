const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// const fs = require('fs');
// fs.writeFileSync('log.txt', `Server started at http://${hostname}:${port}\n`);log(name);log(name);log(name);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});