var http = require('http');

var server = http.createServer(function(request, response) {
    repsonse.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello world!");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);