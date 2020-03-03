const http = require('http');

const hostname = '4.1.1.2';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello');
});

server.listen(port, hostname, () => {
    console.log('server started on port:'+port);
});