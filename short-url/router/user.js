const express = require('express')
const { handleSignup } = require("../controller/user")

const router = express.Router();

router.post('/', handleSignup)

module.exports = router ;