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
                response.writeHead(500);
                response.write(error);
                response.end();
            } else {
                response.writeHead(200, {
                'Content-length': content.length,
                'Content-Type': 'text/html'}); 
        if (rpathname === '/') {
            console.log('Here comes a correct request...');
            var callback = function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                    'Content-length': content.length,
                    'Content-Type': 'text/html'});
                    }
                    response.write(content);
                    console.log('server is responding.');
                    response.end();
                }
                response.write(content);
                console.log('server is responding.');
                response.end();
            }
        fs.readFile('CFIndex.html', callback);
    } else {
        response.writeHead(404);
        response.end('Incorrect root url');
    }
}).listen(8080, '127.0.0.1');
console.log('server is starting.');




// rewrite 03/29/2015
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();

server.on('request', function(request,response) {
    var rpathname = url.parse(request.url).path;
    console.log("Request for " + rpathname + " received.");
    if (rpathname === '/') {
        console.log('There comes a correct request...');
        response.writeHead(200, {'content-type':'text/html'});
        var file = fs.createReadStream('CFIndex.html');
        var errorHandler = function() {
            response.writeHead(500, {'content-type':'text/plain'}); 
            response.write(error);
        }; 
        file
            .on('error', errorHandler)
            .pipe(response, {end:false})
            .on('error', errorHandler);
        file.on ('close', function () {
            response.end(console.log('server is closing'));
        });
    } else {
        response.writeHead(404, {'content-type':'text/plain'});
        response.write('Incorrect url');
        response.end();
    }
});

server.listen(8080, '127.0.0.1');
console.log('server is starting.');



// rewrite 04/01/2015
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
var file = fs.createReadStream('CFIndex.html');

server.on('request', function(request,response) {
    var rpathname = url.parse(request.url).path;
    console.log("Request for " + rpathname + " received.");
    if (rpathname === '/') {
        console.log('There comes a correct request...');
        response.writeHead(200, {'content-type':'text/html'});
        var errorHandler = function(error, content) {
            response.writeHead(500, {'content-type':'text/plain'}); 
            response.write(error);
        }; 
        file
            .on('error', errorHandler)
            .pipe(response, {end:false})
            .on('error', errorHandler);
        file.on ('close', function () {
            response.end(console.log('server is closing'));
        });
    } else {
        response.writeHead(404, {'content-type':'text/plain'});
        response.write('Incorrect url');
        response.end();
    }
});

server.on('error', function(error, content) {
    console.log('on error:' + error);
});

server.listen(8080, '127.0.0.1');
console.log('server is starting.');
server.emit('error', 'Ohno', 'xyz');
file.emit('error', 'again!', 'abc');





// rewrite 04/02/2015
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
var file = fs.createReadStream('CFIndex.html');

var errorHandler = function(error, content) {
    console.error('on error: ' + error);
        }; 
server.on('error', errorHandler);
file.on('error', errorHandler);

server.on('request', function(request,response) {
    var rpathname = url.parse(request.url).path;
    console.log("Request for " + rpathname + " received.");
    if (rpathname === '/') {
        console.log('There comes a correct request...');
        response.writeHead(200, {'content-type':'text/html'});
        file
            .pipe(response, {end:false})
            .on('error', errorHandler);
        file.on ('close', function () {
            response.end(console.log('server is closing'));
        });
    } else {
        response.writeHead(404, {'content-type':'text/plain'});
        response.write('Incorrect url');
        response.end();
    }
});


server.listen(8080, '127.0.0.1');
console.log('server is starting.');
server.emit('error', 'Ohno', 'xyz');
file.emit('error', 'again!', 'abc');
