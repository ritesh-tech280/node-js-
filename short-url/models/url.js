const mongoose = require("mongoose");

// schema for URL shortner 
const urlScheme = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
     
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy : {
      type: mongoose.Schema.Types.ObjectId ,
      ref : 'users',
    }
  },

  {
    timestamps: true,
  },
);

// URl model 

const URl = mongoose.model('url',urlScheme);

module.exports = URl;
