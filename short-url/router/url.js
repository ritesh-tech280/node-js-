const express = require('express');
const { handleShortUrl, handleAnalytics } = require("../controller/url")

const router = express.Router();

// route for creating the short URL 
router.post('/', handleShortUrl);
/// analytics route 
router.get('/analytics/:shortId' , handleAnalytics)

module.exports = router; 