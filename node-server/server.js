// rest.js
const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/') {
            const data = await fs.promises.readFile('./index.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else if (req.url === '/about') {
            const data = await fs.promises.readFile('./about.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
    }
});
