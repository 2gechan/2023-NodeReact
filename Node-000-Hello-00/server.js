import http from "http";
// const hptt = require("http")

http
  .createServer((req, res) => {
    console.log("Hello My Server");

    res.end("<h1>hello</h1>");
  })
  .listen(8080);
