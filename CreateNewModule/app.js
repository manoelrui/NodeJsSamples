var http = require('http');
var dt = require('./DateModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hey dude!!!\n');
    res.write("The current time is " + dt.dateTime() + "\n");
    res.end();
}).listen(8080);