const http = require('http');

// console.log(http);

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hemos creado nuestro primer servidor web!\n 😄');
}).listen(3001, "localhost");
