const http = require("http");
const fs = require("fs");
 

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    if(err){
        return res.status(404).end("Error Reading File ")
    }
    switch(req.url){
        case '/': res.end("Home Page");
        break;
        case '/about': res.end("I am Ritesh Kumar")
        break;
        case '/contact': res.end("Hey Contact us at: 9719457845");
        break;
        default : res.end("404 not Found");
        break ;
    } 
 
  });
}); 
myServer.listen(8000, () => {
  console.log("Server Started !");
});
