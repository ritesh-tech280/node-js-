const Blog = require('../models/blog')

function renderBlogPage(req,res){
    return res.render('addblog');
}

async function addBlog(req ,res){
    console.log(req.body)
    const { title , body } = req.body ;
    await Blog.create({
        title , 
        body
    })
    return res.redirect('/')

}

module.exports = {
    renderBlogPage,
    addBlog
}