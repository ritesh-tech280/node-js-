const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      return res.status(404).end("Error Reading File ");
    }
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        res.end("I am Ritesh Kumar");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("This is result for your quesry :" + search);
        break;
      default:
        res.end("404 not Found");
        break;
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started !");
});
