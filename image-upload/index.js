const express = require('express')
const path = require('path')
const multer  = require('multer')
const app = express();

const PORT = 3000 ;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({ extended :false}))


app.use(express.json());

app.get('/', (req, res) => {
    res.render('home')
})

const storage = multer.diskStorage({
    destination: function (req, file,cb){
        return cb(null , './uploads')
    },
    filename: function (req,file, cb){ 
        return cb(null , `${Date.now()} - ${file.originalname}`)
    }
})

const upload = multer({ storage })

app.post('/uploads', upload.fields([ { name : 'profileImage'} , {name: 'coverImage'}]), (req, res) =>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/')
})

app.listen(PORT, ()=> {
    console.log(`Example server running on PORT : ${PORT}`)
}) 