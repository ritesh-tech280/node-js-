const express = require("express")
const URl = require('../models/url');
const { restrictTo } = require("../middleware/auth");
const router = express.Router();

router.get('/admin/urls',  restrictTo(['ADMIN']) ,async (req , res) => {
    const allUrls = await URl.find({ })
    res.render('home', {
        urls: allUrls
    })
})

router.get('/', restrictTo(['NORMAL' , 'ADMIN']) , async (req , res) => {
    const allUrls = await URl.find({ createdBy:req.user._id})
    res.render('home', {
        urls: allUrls
    })
})


router.get('/signup', (req, res) => {
    return res.render('signup')
})

router.get('/login', (req ,res) => {
    return res.render('login');
})

module.exports = router ;