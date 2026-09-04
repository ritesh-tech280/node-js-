const express = require('express');
const fs = require('fs')
const app = express()
const stream = require('node:stream')
const status = require('express-status-monitor');
const zlib = require('node:zlib')
const port = 3000

fs.createReadStream('./sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')))
app.use(status())
app.get('/', (req, res) => {
    const stream = fs.createReadStream('./sample.txt', "utf-8")
    stream.on('data' , (chunk) => res.write(chunk))
    stream.on('end' , ()=> res.end())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})