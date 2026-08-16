const mongoose = require('mongoose')

//function for connecting the mongoDb 
async function connectDB(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectDB ,
}