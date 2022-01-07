const http = require('http');
const url = require('url');
const port = 3000;

http.createServer((request, response) => {
    const queryObject = url.parse(request.url, true).query;
    if (queryObject.message != null) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(`Your message: ${queryObject.message}`);
    } else {
        response.writeHead(400, { 'Content-Type': 'text/html' });
        response.end();
    }
}).listen(port);