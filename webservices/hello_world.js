var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Prueba de node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>Prueba</h1>\n' + 
    '<div id="content"><p>Pagina de prueba de node.js. JP. 2018.</p></div>' + 
    '\n\n');
  res.end();
}).listen(8888, '172.31.3.246');
console.log('Server running at http://ec2-18-219-207-233.us-east-2.compute.amazonaws.com:8888');

