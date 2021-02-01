const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "Add User",
    },
    userId: { type: Schema.Types.ObjectId, ref: "Profile" },
    profilePic: {
      type: String,
      default: "/images/profile1.png",
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "Movies" }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: "Movies" }],
    myList: [{ type: Schema.Types.ObjectId, ref: "Movies" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
