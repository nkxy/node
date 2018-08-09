'use strict';

const http = require('http'); 

function route(req, res) {
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end('<h1>I enjoy memes</h1>');
}
http
  .createServer((req, res) => {
    
  })
  .listen(3000, () => console.log("Routed server running on 3000"));