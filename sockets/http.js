var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('HTML goes here');
  res.end();
}).listen(80, '0.0.0.0');

