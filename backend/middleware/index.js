const fs = require('fs')

function logReqRes(filename) {
  return (req, res, next) => {
    fs.writeFile(
      filename,
      `This ${req.method} request come from middleware 1 from ${req.path} `,
      (err, data) => {
        next();
      },
    );
  };
}

 module.exports = { 
    logReqRes , 
 }
