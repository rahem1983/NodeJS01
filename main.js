var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("hello Word")
})

server.listen(5050);
console.log("runed");