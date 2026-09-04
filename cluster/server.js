const cluster = require('node:cluster');
const express = require('express')

const os = require('os');

const numCPUs = os.cpus().length ;


if(cluster.isPrimary){
    for(let i = 0 ; i < numCPUs ; i++){
        cluster.fork();
    }
}  else {
    const app = express();

    app.get('/', (req, res) =>{
        res.json({message : `server handled by ${process.pid}`})
    })

    app.listen(3000, ()=> console.log(`server running on PORT:3000`))
}