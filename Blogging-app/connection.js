const { connect } = require('mongoose')

async function connectDB(url){
   return connect(url);
}

module.exports = {
    connectDB , 
}