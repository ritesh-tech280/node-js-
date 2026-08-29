const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new Schema(
  {
    name: {
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

userSchema.pre("save", function () {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }

  const salt = "RandomSaltByte";
  const hashpassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  user.salt = salt;
  user.password = hashpassword;
});

userSchema.static('createTokenForUser', async function(email , password){
      const user = await this.findOne({ email });
      if(!user) {
          throw new Error('User not Found');
      }
      const salt = user.salt ;
      const hashpassword = user.password ;

      const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    if(hashpassword !== userProvidedHash){
      throw new Error('Incorrect Password');
    }
    const token = createTokenForUser(user) ;
    return token  ; 
     
  
}
); 

const User = model("user", userSchema);

module.exports = User;
