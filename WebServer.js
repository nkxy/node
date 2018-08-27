'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs'); //allows us to do a lot of things with files.
const path = require('path'); 

let mimes = {
  '.html': 'text/html'
};

function webserver(req, res) {
  // parsing the url given in the request. 
  let baseURI = url.parse(req.url);
  let filepath = __dirname + baseURI.pathname === '/' ? '/index.html' : baseURI.pathname;

  // check if the requested file is accessible. 
  fs.access(filepath, F_OK, error => {
    if(!error) {
      // Read and serve the file
      fs.readFile(filepath, (error, content) => {
        if (!error) {
          let contentType = mimes[path.extname(filepath)];
          res.writeHead(200, {'content-Type':contentType});
          res.end(content); 
        } else {
          res.writeHead(500);
          res.end('Could not read'); 
        }
      }) 
    } else {
      // file is not there, and we will throw an error status code. 
      res.writeHead(404);
      res.end('Memes not found.');
    }
  });
}

http.createServer(webserver).listen(3000, () => {
  console.log("Server running on port 3000");
});