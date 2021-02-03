const Profile = require("../Model/ProfileModel");
const Show = require("../Model/show");

const likeShowController = async (req, res, next) => {
  //User Id
  try {
    const { data: userId } = req.id;

    const { showId } = req.params;
    const { profileId } = req.query;

    const profile = await Profile.findOne({ _id: profileId });

    const isLiked = profile.likes && profile.likes.includes(showId);
    console.log(isLiked);

    const option = isLiked ? "$pull" : "$addToSet";
    console.log(option);
    //Insert user like; pull delets and addToSet adds unique values to the likes array
    const newProfile = await Profile.findByIdAndUpdate(
      profileId,
      { [option]: { likes: showId } },
      { useFindAndModify: false }
    );

    //Insert post like; pull delets and addToSet adds adds unique values to the likes array

    return res.status(200).json({
      newProfile,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = likeShowController;
