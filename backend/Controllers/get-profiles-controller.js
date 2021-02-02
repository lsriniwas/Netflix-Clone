const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");
const getProfilesController = async (req, res) => {
  //logged user id
  const { data: _id } = req.id;

  Profile.find({
    userId: _id,
  })
    .then(async (profiles) => {
      res.status(200).json({
        profiles,
      });
    })
    .catch((err) => {
      res.state(404).json({
        message: err.message,
      });
    });
};

module.exports = getProfilesController;
