const { Router }  = require('express');
const { renderSignIn , renderSignup, createUser, loginUser, logout } = require('../controller/user')

const router = Router();

router.get('/signup' , renderSignup);
router.get('/signin', renderSignIn);
router.post('/signup', createUser);
router.post('/signin', loginUser)
router.get('/logout', logout)

module.exports = router ;