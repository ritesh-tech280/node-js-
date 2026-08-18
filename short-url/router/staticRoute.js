const express = require("express")
const URl = require('../models/url')
const router = express.Router();

router.get('/', async (req , res) => {
    const allUrls = await URl.find({})
    res.render('home', {
        urls: allUrls
    })
})


router.get('/signup', (req, res) => {
    return res.render('signup')
})

module.exports = router ;