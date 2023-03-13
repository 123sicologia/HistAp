const http = require('http');
const PORT = 3000;
const serverCallback = (req, res) => {
    res.end('Hello, world!');
  }
  const server = http.createServer(serverCallback);
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
    