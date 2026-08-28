const express = require('express');
const app = express();
const userRouter = require('./router/user')
const { connectDB } = require('./connection')
const path = require('path')
const PORT = 8000 ;

connectDB('mongodb://localhost:27017/blogify').then(()=> console.log("MongoDB Connected")); 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended : false }));
app.use(express.json())


app.use('/user', userRouter);

app.get('/' , (req, res) => {
    res.render('home')
})

app.listen(PORT, ()=> console.log(`Server running on : ${PORT}`))