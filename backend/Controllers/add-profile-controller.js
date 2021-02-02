const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");
const addProfileController = async (req, res) => {
  //logged user id
  const { data: _id } = req.id;

  Profile.create({
    userId: _id,
  }).then(async (newProfile) => {
    res.json({
      newProfile,
    });
  });
};

module.exports = addProfileController;
