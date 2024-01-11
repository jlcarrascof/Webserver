const http = require('http');
const fs = require('fs');

// console.log(http);

http.createServer((req, res) => {
    // * Enviando Texto Plano
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hemos creado nuestro primer servidor web!\n 😄');

    // * Enviando HTML

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // const html = fs.readFileSync('./index.html');
    // res.end(html);

    // * Enviando HTML con templates

    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync('./index.html', 'utf8');
    const nombre = 'Luis';
    html = html.replace('{nombre}', nombre);
    res.end(html);

}).listen(3001, "localhost");
