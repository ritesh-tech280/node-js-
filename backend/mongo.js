const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

//mongoDb connection
mongoose
  .connect("mongodb://localhost:27017/myfirstDb")
  .then(() => {
    console.log("MongDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error", err);
  });

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

app.use(express.urlencoded({ extended: false }));
const User = mongoose.model("user", userSchema);

app.get("/api/users", async (req, res) => {
  const allusers = await User.find({});
  const html = `<ul>
      ${allusers.map((user) =>
        `<li> ${user.firstName} - ${user.email} </li> `
      ).join("")}
     </ul>`;
  res.status(200).send(html);
});

app.get("/api/users/:id" , async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
})
app.patch("/api/users/:id" , async (req, res) => {
    await User.findByIdAndUpdate(req.params.id , {lastName: "Singh"})
    res.send({msg : "success"})
})
app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);
  res.status(201).json({ msg: "Success", result });
});

app.delete("/api/users", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
