const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync('./index.html', 'utf8');
        const nombre = 'Alberto';
        html = html.replace('{nombre}', nombre);
        res.end(html);
    } else if (req.url === '/alumnos') {
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
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }  
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Servidor Levantado 🚀');
}).listen(3001, "localhost");