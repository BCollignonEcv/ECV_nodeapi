const http = require('http');
const port = 3000;

http.createServer((request, response) => {
    response.writeHead(400, {
        'Content-Type': 'application/json',
    });
    response.end()
}).listen(port);