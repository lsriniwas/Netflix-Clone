const Profile = require("../Model/ProfileModel");
const Show = require("../Model/show");

const addToListController = async (req, res, next) => {
  //User Id
  try {
    const { data: userId } = req.id;

    const { showId } = req.params;
    const { profileId } = req.query;

    const profile = await Profile.findOne({ _id: profileId });

    const inList = profile.myList && profile.myList.includes(showId);

    const option = inList ? "$pull" : "$addToSet";

    //Insert user like; pull delets and addToSet adds unique values to the likes array
    let newProfile = await Profile.findByIdAndUpdate(
      profileId,
      { [option]: { myList: showId } },
      { useFindAndModify: false, returnOriginal: false }
    );

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

module.exports = addToListController;
