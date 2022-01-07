const http = require('http');
const url = require('url');
const port = 3000;

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    let msg;
    if (request.url === '/welcome') {
        response.statusCode = 200;
        msg = 'Hello World';
    } else if (request.url === '/test') {
        response.statusCode = 200;
        msg = 'Success';
    } else {
        response.statusCode = 404;
        msg = 'Not found';
    }
    response.end(msg);
}).listen(port, () => console.log(`http://localhost:${port}`));