const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const showSchema = new Schema(
  {
    backdrop_path: {
      type: String,
      trim: true,
    },
    genre_ids: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    id: {
      type: Number,
    },
    original_language: {
      type: String,
    },
    original_title: {
      type: String,
    },
    overview: {
      type: String,
    },
    popularity: {
      type: String,
    },
    poster_path: {
      type: String,
    },
    release_date: {
      type: String,
    },
    title: {
      type: String,
    },
    vote_average: {
      type: String,
    },
    vote_count: {
      type: String,
    },
    video: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Show", showSchema);
