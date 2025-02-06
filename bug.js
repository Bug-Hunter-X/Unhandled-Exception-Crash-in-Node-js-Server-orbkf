const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// The issue is that in case of an unhandled exception, the server will crash without a proper error handling mechanism.  It will not restart automatically. 