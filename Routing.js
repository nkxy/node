'use strict';

const http = require('http'); 
const url = require('url');

let requests = {
  'GET': {
    '/': (req, res) => {
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end('<h1>This is the root page. Where my memes lie.</h1>');
    },
    '/dankmemes' : (req, res) => {
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end('<h1>I like dank memes</h1>');
    },
    '/api/getinfo': (req, res) => {
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(JSON.stringify(req.queryParams));
    }
  },
  'POST': {

  },
  'NA': (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>4 0 4 memes not found</h1>');
  }
}

function route(req, res) {
  let baseURL = url.parse(req.url, true);
  console.log(req.url);
  console.log(req.method);

  let resolve = requests[req.method][baseURL.pathname];
  if (resolve != undefined) {
    req.queryParams = baseURL.query;
    resolve(req, res);
  } else {
    requests['NA'](req, res);
  }
}
http
  .createServer(route)
  .listen(3000, () => console.log("Routed server running on 3000"));