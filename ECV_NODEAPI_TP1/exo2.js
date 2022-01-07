const http = require('http');
const port = 3000;
const payloadResponse = {};

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json')
    payloadResponse.message = "Hello World";
    payloadResponse.status = response.statusCode;
    response.end(JSON.stringify(payloadResponse))
}).listen(port);