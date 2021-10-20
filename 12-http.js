const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page</h1>')
    }

    if (req.url === '/about') {
        res.end('<h2>Here is the About</h2>')
    }
    res.end('<h1>Opps</h1><h2>Sorry, the page does not exists</h2><a href="/">Back</a>')
})

server.listen(5000)