const { Schema , model } = require('mongoose')

const blogSchema = new Schema( {
    title : {
        type: String ,
        required: true ,
    },
    body :{
        type: String ,
        required : true,
    },
    coverImageUrl : {
        type : String ,
    },
    createdBy : {
         type : Schema.Types.ObjectId,
         ref: "user",
    }
} , { timestamps : true})

const Blogs = model("blogs", blogSchema);

module.exports = Blogs ;