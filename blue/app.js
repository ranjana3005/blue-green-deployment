const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Blue-Green Deployment Version 1");
});

server.listen(4000, () => console.log("App running on port 4000"));
