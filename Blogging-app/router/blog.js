const { Router } = require('express');
const { renderBlogPage, addBlog , renderAllBlogs } = require('../controller/blog')
const multer = require('multer')
const path = require('path')
const Blog = require('../models/blog');
const Comment = require('../models/comment');
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
   const blog = await Blog.findById(req.params.id).populate('createdBy');
   const comments = await Comment.find({ blogId : req.params.id }).populate('createdBy');
   
    return res.render('blogs', {
        user : req.user,
        blog,
        comments,
    })
})

router.post('/comment/:blogId' , async (req, res) => {
  await Comment.create({
    content : req.body.content ,
    blogId : req.params.blogId ,
    createdBy : req.user._id ,
  })
return res.redirect(`/blog/${req.params.blogId}`)
} )
router.get('/add', renderBlogPage);
router.post('/add', upload.single('coverImage') ,  addBlog)
 

module.exports = router ;