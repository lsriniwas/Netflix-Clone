const Profile = require("../Model/ProfileModel");
const Show = require("../Model/show");

const addToListController = async (req, res, next) => {
  //User Id
  try {
    const { data: userId } = req.id;

    const { showId } = req.params;
    const { profileId } = req.query;

    const profile = await Profile.findOne({ _id: profileId });

    const inList = profile.likes && profile.myList.includes(showId);
    console.log(inList);
    const option = inList ? "$pull" : "$addToSet";

    //Insert user like; pull delets and addToSet adds unique values to the likes array
    const newProfile = await Profile.findByIdAndUpdate(
      profileId,
      { [option]: { myList: showId } },
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

module.exports = addToListController;
