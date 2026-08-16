const express = require('express')
const urlRoute = require("./router/url")
const { connectDB } = require('./connection');

const app = express()
const PORT = 3000 ;


connectDB('mongodb://localhost:27017/urlShort').then(() =>  console.log('MongoDB Connected'))
app.use(express.json())
app.use('/url', urlRoute)

app.listen(PORT , () => {
    console.log(`Example server running on localhost : ${PORT}`)
})