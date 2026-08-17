const express = require("express")
const URl = require('../models/url')
const router = express.Router();

router.get('/', async (req , res) => {
    const allUrls = await URl.find({})
    res.render('home', {
        urls: allUrls
    })
})

module.exports = router ;