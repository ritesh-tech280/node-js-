const mongoose = require("mongoose");

//mongo Db schema
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

//mongo db Model
const User = mongoose.model("user", userSchema);

module.exports = User ;