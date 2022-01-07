const http = require('http');
const port = 3000;
const payloadResponse = {
    "firstname": "Baptiste",
    "lastname": "Collignon",
    "birthdate": "19/11/1996",
    "color": "bleue"
};

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json',
    });
    response.end(JSON.stringify(payloadResponse))
}).listen(port);