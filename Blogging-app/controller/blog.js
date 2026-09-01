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

module.exports = {
    renderBlogPage,
    addBlog
}