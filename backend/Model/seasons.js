const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonSchema = new Schema(
  {
        episodes:[{type:Schema.Types.ObjectId,ref:"Episode"}],
        name: {
            type:String
        },
        "poster_path":{
            type:String
        },
        "season_number":{
            type:Number
        }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Season", seasonSchema);
