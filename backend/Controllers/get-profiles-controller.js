const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");
const getProfilesController = async (req, res) => {
  //logged user id
  try {
    const { data: _id } = req.id;
    let profiles = await Profile.find({
      userId: _id,
    }).populate("myList");

    profiles = await Profile.populate(profiles, {
      path: "myList.genre_ids",
    });

    return res.status(200).json({
      profiles,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = getProfilesController;
