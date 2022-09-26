const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write(req.url);
    res.end();
  } else if (req.url === "/gotit") {
    res.write("gotta logtta");
    res.end();
  } else {
    res.write(req.url);
    res.end();
  }
});

// server.listen(3000);
// console.log("running");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello programmers!");
//     res.write("How are you doing?");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("This is about us page");
//     res.end();
//   } else {
//     res.write("Not found");
//     res.end();
//   }
// });

server.listen(3000);

console.log("listening on port 3000");
