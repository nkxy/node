'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs'); //allows us to do a lot of things with files. 

function webserver(req, res) {
  // parsing the url given in the request. 
  let baseURI = url.parse(req.url);
  let filepath = __dirname + baseURI.pathname === '/' ? '/index.html' : baseURI.pathname;

  // check if the requested file is accessible. 
}

http.createServer(webserver).listen(3000, () => {
  console.log("Server running on port 3000");
});