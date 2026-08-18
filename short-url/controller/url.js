const shortid = require("shortid")
const  URl = require("../models/url")
 
// function to create the short url 
async function handleShortUrl(req, res) {
    const body = req.body ;
    if(!body.url) return res.status(400).json({ message : "URl is Require"});
    const shortID = shortid();

    await URl.create({
        shortId: shortID,
        redirectURL : body.url,
        visitHistory : [],
        createdBy: req.user._id,

    })

    return res.render('home', {
         id:shortID
    })
    
}


// function for handling the Analytics 
async function handleAnalytics(req, res) {
    const shortId = req.params.shortId ;
    const result = await URl.findOne({ shortId});
    res.json({ totalCliks : result.visitHistory.length ,
        analytics : result.visitHistory 
     })
    
}

module.exports = {
    handleShortUrl,
    handleAnalytics
}