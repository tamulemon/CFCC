//Original submission
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
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.write(error);
                response.end();
            } else {
                response.writeHead(200, {
                    'Content-length': content.length,
                    'Content-Type': 'text/html'}); 
                response.write(content);
                console.log('server is responding.');
                response.end();
            }
        };
        fs.readFile('CFIndex.html', callback);
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Incorrect root url');
    }
}).listen(8080, '127.0.0.1');
console.log('server is starting.');





// rewrite 04/02/2015
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();

var errorHandler = function(error, content) {
    console.error('on error: ' + error);
        }; 

server.on('error', errorHandler);

server.on('request', function(request,response) {
    var rpathname = url.parse(request.url).path;
    var file = fs.createReadStream('CFIndex.html');
    file.on('error', errorHandler);
//    file.emit('error', 'again!', 'abc');
    console.log("Request for " + rpathname + " received.");
    if (rpathname === '/') {
        console.log('There comes a correct request...');
        response.writeHead(200, {'content-type':'text/html'});
        file
            .pipe(response, {end:false})
            .on('error', errorHandler);
        file.on ('end', function () {
            response.end(console.log('server is closing'));
        });
    } else {
        response.writeHead(404, {'content-type':'text/plain'});
        response.write('Incorrect url');
        response.end();
    }
});

//test code
server.listen(8080, '127.0.0.1');
console.log('server is starting.');
//server.emit('error', 'Ohno', 'xyz');

