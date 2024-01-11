const http = require('http');
const fs = require('fs');

// console.log(http);

http.createServer((req, res) => {
    console.log(res);

    // * Enviando Texto Plano
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hemos creado nuestro primer servidor web!\n 😄');

    // * Enviando HTML

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // const html = fs.readFileSync('./index.html');
    // res.end(html);

    // * Enviando HTML con templates

    // res.writeHead(200, {'Content-Type': 'text/html'});
    // let html = fs.readFileSync('./index.html', 'utf8');
    // const nombre = 'Alberto';
    // html = html.replace('{nombre}', nombre);
    // res.end(html);

    // * Enviando JSON

    const alumnos = [
        {
            id: 1,
            nombre: 'Nico',
        },
        {
            id: 2,
            nombre: 'Gus',
        },
        {
            id: 3,
            nombre: 'Irvin',
        },
        {
            id: 4,
            nombre: 'Joaquín',
        }
    ];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(alumnos));

}).listen(3001, "localhost");
