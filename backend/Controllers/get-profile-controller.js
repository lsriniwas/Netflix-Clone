const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");

const getProfileController = async (req, res) => {
  const { profileId } = req.query;
  Profile.findOne(profileId)
    .then(async (profile) => {
      res.status(200).json({
        profile,
      });
    })
    .catch((err) => {
      res.state(404).json({
        message: err.message,
      });
    });
};
module.exports = getProfileController;
