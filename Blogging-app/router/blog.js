const { Router } = require('express');
const { renderBlogPage, addBlog } = require('../controller/blog')

const router = Router();


router.get('/add', renderBlogPage);
router.post('/add' , addBlog)
 

module.exports = router ;