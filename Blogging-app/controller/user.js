const User = require("../models/user");

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
    const { email , password }  = req.body ;
    const user =  await User.matchPassword(email , password);
    
    
    if(!user) {
        res.redirect('/user/signin');
    } 
    return res.redirect('/')
}

module.exports = {
  renderSignIn,
  renderSignup,
  createUser,
  loginUser ,
};
