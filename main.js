var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("hello Word");
});

setTimeout(() => {
  console.log("runed");
}, 5000);
server.listen(5050);
