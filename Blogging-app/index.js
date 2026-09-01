const express = require('express');
const app = express();
const userRouter = require('./router/user')
const blogRouter = require('./router/blog')
const { connectDB } = require('./connection')
const cookieParser = require('cookie-parser')
const  { getAllBlogs } = require('./controller/blog')


const path = require('path');
const { checkForAuthentication } = require('./middleware/authentication');
const PORT = 8000 ;

connectDB('mongodb://localhost:27017/blogify').then(()=> console.log("MongoDB Connected")); 
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))


app.use(express.urlencoded({ extended : false }));
app.use(express.json())
app.use(cookieParser());
app.use(checkForAuthentication('token'))
app.use(express.static(path.resolve('./public')))


app.use('/user', userRouter);
app.use('/blog', blogRouter)

app.get('/' , async (req, res) => {
    const allBlogs = await getAllBlogs();
    res.render('home' , {
        user : req.user,
        blogs : allBlogs
    })
})

 

app.listen(PORT, ()=> console.log(`Server running on : ${PORT}`))