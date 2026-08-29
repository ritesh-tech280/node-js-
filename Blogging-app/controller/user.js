const User = require("../models/user");
const { createTokenForUser } = require('../services/authentication')

//Function fo redireting the signup
function renderSignup(req, res) {
  return res.render("signup");
}

function renderSignIn(req, res) {
  return res.render("signin");
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

 return  res.redirect("/");
}

async function loginUser(req, res){
    const { email , password }  = req.body;

    try {
      const token =  await User.createTokenForUser(email , password);
      if(!token) {
          res.redirect('/user/signin');
      }
        return res.cookie('token' , token).redirect('/')
      
    } catch (error) {
      return res.render('signin', {
        error: 'Incorrect Email or Password'
      })
    }
    
}

function logout(req,res){
  return res.clearCookie('token').redirect('/')

}

module.exports = {
  renderSignIn,
  renderSignup,
  createUser,
  loginUser ,
  logout ,
};
