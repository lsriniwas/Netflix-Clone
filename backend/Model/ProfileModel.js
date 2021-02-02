const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      default: "Add User",
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    profilePic: {
      type: String,
      default: "/images/profile1.png",
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "Show" }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: "Show" }],
    myList: [{ type: Schema.Types.ObjectId, ref: "Show" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
