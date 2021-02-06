const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");

const getProfileController = async (req, res) => {
  const { profileId } = req.params;

  try {
    const { data: _id } = req.id;
    let profile = await Profile.find({
      _id: profileId,
    }).populate("myList");

    profile = await Profile.populate(profile, {
      path: "myList.genre_ids",
    });

    return res.status(200).json({
      profile,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = getProfileController;
