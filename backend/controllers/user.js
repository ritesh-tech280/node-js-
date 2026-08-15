 const User = require('../models/user')

async function getAllUsers(req, res){
    const allusers = await User.find({});
    const html = `<ul>
      ${allusers
        .map((user) => `<li> ${user.firstName} - ${user.email} </li> `)
        .join("")}
     </ul>`;
    res.status(200).send(html);
};

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    res.json(user)
}

async function updateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id , {lastName: "Singh"})
    res.send({msg : "success"})
}

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

async function  deleteUserById(req, res){
  await User.findByIdAndDelete(req.params.id);
}



module.exports = {
    getAllUsers , getUserById, updateUserById , saveUser, deleteUserById
}

