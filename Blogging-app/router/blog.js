const { Router } = require('express');
const { renderBlogPage, addBlog , renderAllBlogs } = require('../controller/blog')
const multer = require('multer')
const path = require('path')
const Blog = require('../models/blog')
const router = Router();



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.resolve( `./public/uploads/`))
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null , fileName)
  }
})

const upload = multer({ storage: storage })

router.get('/:id' , async (req, res)=> {
   const blog = await Blog.findById(req.params.id);
    return res.render('blogs', {
        user : req.user,
        blog,
    })
})
router.get('/add', renderBlogPage);
router.post('/add', upload.single('coverImage') ,  addBlog)
 

module.exports = router ;