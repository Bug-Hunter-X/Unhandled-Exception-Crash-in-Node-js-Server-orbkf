const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request
    console.log('Request received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// For production, use a process manager like PM2 for automatic restarts:
// npm install pm2 -g
// pm2 start bugSolution.js --watch