var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request, response) {
    var rpathname = url.parse(request.url).path;
    console.log("Request for " + rpathname + " received.");
        if (rpathname === '/') {
            console.log('Here comes a correct request...');
            var callback = function (error, content) {
                if (error) {
                    response.writeHead(500);
                    //throw error;
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                    'Content-length': content.length,
                    'Content-Type': 'text/plain'}); //this will make the page show up in raw code
                    // if change to 'text/html', will actually display the page
                    }
                    response.write(content);
                    console.log('server is responding.');
                    response.end();
                }
            fs.readFile('index.html', callback);
        } else {
            response.writeHead(404);
            response.end('Incorrect root url');
        }
    }).listen(8080, '127.0.0.1');
console.log('server is starting.');
