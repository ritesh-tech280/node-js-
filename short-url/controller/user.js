const User = require("../models/user");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invalid email or Password",
    });

  return res.redirect("/");
}

module.exports = {
  handleSignup,
  handleLogin, 
};
