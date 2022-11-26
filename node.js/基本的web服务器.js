const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end('<h1>世界你好！</h1>');
    console.log('content!');
});
server.listen('80', () => {
    console.log('http://localhost');
});