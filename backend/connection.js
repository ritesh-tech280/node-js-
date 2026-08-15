const mongoose = require("mongoose");

async function mongoDbConnection(url) {
  //mongoDb connection
      return  mongoose.connect(url);
}

module.exports = {
    mongoDbConnection,
}