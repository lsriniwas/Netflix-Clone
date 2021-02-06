const Profile = require("../Model/ProfileModel");
const Show = require("../Model/show");

const dislikeShowController = async (req, res, next) => {
  //User Id
  try {
    const { data: userId } = req.id;

    const { showId } = req.params;
    const { profileId } = req.query;

    const profile = await Profile.findOne({ _id: profileId });

    const isDisliked = profile.likes && profile.dislikes.includes(showId);
    const isLiked = profile.likes && profile.likes.includes(showId);

    const option = isDisliked ? "$pull" : "$addToSet";

    //Insert user like; pull delets and addToSet adds unique values to the likes array
    let newProfile = await Profile.findByIdAndUpdate(
      profileId,
      { [option]: { dislikes: showId } },
      { useFindAndModify: false, returnOriginal: false }
    );

    if (isLiked) {
      newProfile = await Profile.findByIdAndUpdate(
        profileId,
        { $pull: { likes: showId } },
        { useFindAndModify: false, returnOriginal: false }
      );
    }

    newProfile = await Profile.populate(newProfile, "myList");

    newProfile = await Profile.populate(newProfile, "myList.genre_ids");

    //Insert post like; pull delets and addToSet adds adds unique values to the likes array

    return res.status(200).json({
      newProfile,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = dislikeShowController;
