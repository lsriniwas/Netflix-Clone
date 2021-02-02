const User = require("../../Model/UserModel");
const Post = require("../../Model/PostModel");

const likeShowController = async (req, res, next) => {
  //User Id
  try {
    const { data: userId } = req.id;

    const { showId, profileId } = req.params;

    const user = await User.findOne({ _id: userId });

    const isLiked = user.likes && user.likes.includes(postId);
    const option = isLiked ? "$pull" : "$addToSet";

    //Insert user like; pull delets and addToSet adds unique values to the likes array
    await User.findByIdAndUpdate(
      userId,
      { [option]: { likes: [postId] } },
      { useFindAndModify: false }
    );

    //Insert post like; pull delets and addToSet adds adds unique values to the likes array
    let post = await Post.findByIdAndUpdate(
      postId,
      { [option]: { likes: userId } },
      { useFindAndModify: false, new: true }
    ).populate({
      path: "postedBy",
      select: { password: 0, email: 0 },
    });

    return next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = likePostController;
