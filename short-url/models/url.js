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
  },
  {
    timestamps: true,
  },
);

// URl model 

const URl = mongoose.model('url',urlScheme);

module.exports = URl;
