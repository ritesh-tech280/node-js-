const User = require("../models/user");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.redirect('/');
}

module.exports = {
  handleSignup,
};
