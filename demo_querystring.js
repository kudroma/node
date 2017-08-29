var http = require('http');
var url = require('url');

// create a server object
http.createServer(function (req, res) {
   res.writeHead(200,{'Content-type' : 'text/html'});
   var q = url.parse(req.url,true).query;
   var txt = q.year + " " + q.month;
   res.end(txt);  // end a response
}).listen(8080);
