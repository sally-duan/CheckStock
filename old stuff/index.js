var http = require('http');
var fs = require('fs');
var url = require('url');



http.createServer(function(req, res){
    var q= url.parse(req.url, true);
    var filename = "." +  q.pathname;
    if (filename =='./')
        filename = 'index.html'
   
 fs.readFile(filename, function(error, data)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data)
    return res.end();
})}).listen(8080);
console.log("server listening to port 8080");


