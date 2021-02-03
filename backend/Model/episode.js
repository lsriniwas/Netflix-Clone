const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema(
  {
    episode_number: {
      type: Number,
    },
    season_id: {
      type: String,
    },
    tbshow_id: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    overview: {
      type: String,
    },
    still_path: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Episode", episodeSchema);
