const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");
const addProfileController = async (req, res) => {
  //logged user id
  const { data: _id } = req.id;
  const { name } = req.body;
  Profile.create({
    name,
    userId: _id,
  })
    .then(async (newProfile) => {
      await User.findByIdAndUpdate(_id, {
        $addToSet: { profiles: [newProfile._id] },
      });
      return res.status(200).json({
        newProfile,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: err.message,
      });
    });
};

module.exports = addProfileController;
