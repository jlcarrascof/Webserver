const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor Levantado');
}).listen(3001, "localhost");