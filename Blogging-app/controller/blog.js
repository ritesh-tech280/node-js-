const Blog = require('../models/blog')

function renderBlogPage(req,res){
    return res.render('addblog');
}

async function addBlog(req ,res){
 
    const { title , body } = req.body ;
    await Blog.create({
        title , 
        body ,
        createdBy: req.user._id ,
        coverImageUrl : `/uploads/${req.file.filename}`
    })
    return res.redirect(`/blog`)

}


async function getAllBlogs(req,res){
    const allBlogs = await Blog.find({});
    return allBlogs ;
}


function renderAllBlogs(req,res){
    return res.render('blogs')
}
module.exports = {
    renderBlogPage,
    addBlog ,
    getAllBlogs ,
    renderAllBlogs
}