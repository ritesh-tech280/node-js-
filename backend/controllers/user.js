const User = require("../models/user");

// Funtion for Getting all the users
async function getAllUsers(req, res) {
  const allusers = await User.find({});
  const html = `<ul>
      ${allusers
        .map((user) => `<li> ${user.firstName} - ${user.email} </li> `)
        .join("")}
     </ul>`;
  res.status(200).send(html);
}

// Function for getting user by id
async function getUserById(req, res) {
  const user = await User.findById(req.params.id);
  res.json(user);
}

// Function for update the user by id
async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Singh" });
  res.send({ msg: "success" });
}

// Function for creating user
async function saveUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);
  res.status(201).json({ msg: "Success", result });
}

// Function for delete the user
async function deleteUserById(req, res) {
  const deltedUser = await User.findByIdAndDelete(req.params.id);
  res.send(deletedUser.id);
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  saveUser,
  deleteUserById,
};
