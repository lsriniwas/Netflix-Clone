const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const genreSchema = new Schema(
  {
    name:{
        name:String,
        required:true
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Genre", genreSchema);
