'use strict';
const http = require('http'); 
http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>HELLO MEMES</h1>');
  })
  .listen(3000, () => console.log("server running on 3000"));