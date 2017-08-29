var http = require('http');

// create a server object
http.createServer(function(req,res){
   res.writeHead(200,{'Content-type' : 'text/html'});
   res.write("Hello world!"); // write a response to a client
   res.write(req.url);
   res.end();  // end a response
}).listen(8080);