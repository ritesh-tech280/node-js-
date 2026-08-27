const { Schema , model } = require("mongoose")

const userSchema = new Schema({
     firstName : {
        type: String,
        required: true,
     },
     email : {
        type : String ,
        required : true ,
        unique : true ,
     } ,
     salt  : {
        type : String ,
        required : true
     } ,
     password : { 
        type  : String ,
        required : true
     } ,
     profileUrl : {
      type : String ,
      default : '/images/profile.png'
     }
} , { timestamps : true })

const User = model('user', userSchema);

module.exports = User  ;
