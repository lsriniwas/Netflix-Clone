const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const showSchema = new Schema(
  { 
    backdrop_path:{   
        type:String,
        required:true,
        trim:true     
    },
    "genre_ids": [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    "id":{
        type:Number,
        required:true
    } ,
    "original_language":{
            type:String,
    },
    "original_title":{
            type:String,
            required:true
    },
    "overview": {
            type:String,
            required:true
    },
    "popularity":{
            type:String,
    },
    "poster_path": {
            type:String,
            required:true
    },
    "release_date": {
            type:String,
            required:true
    },
    "title":{
            type:String,
            required:true
    },
    "vote_average": {
            type:String,
    },
    "vote_count":{
            type:String,
    },
    "video":{
            type:String,
            required:true
    },
    "type":{
            type:String,
            required:true
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Show", showSchema);
