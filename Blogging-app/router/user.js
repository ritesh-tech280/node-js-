const { Router }  = require('express');
const multer = require('multer');
const path  = require('path')
const { renderSignIn , renderSignup, createUser, loginUser, logout } = require('../controller/user')

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.resolve( `./public/images/`))
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null , fileName)
  }
})

const upload = multer({ storage : storage})


router.get('/signup' , renderSignup);
router.get('/signin', renderSignIn);
router.post('/signup',  upload.single('profileUrl'), createUser);
router.post('/signin', loginUser)
router.get('/logout', logout)

module.exports = router ;