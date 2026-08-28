const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileUrl: {
      type: String,
      default: "/images/profile.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true },
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified()) return;

  const salt = randomBytes(16).toString();
  const hashpassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
    this.salt = salt ;
    this.password = hashpassword;

    next()
});

const User = model("user", userSchema);

module.exports = User;
