const User = require("../Model/UserModel");
const Profile = require("../Model/ProfileModel");
const addProfileController = async (req, res) => {
  //logged user id
  const { data: _id } = req.id;
  const { name } = req.body;
  console.log(_id);
  Profile.create({
    userId: _id,
    name,
  })
    .then(async (newProfile) => {
      res.status(200).json({
        newProfile,
      });
    })
    .catch((err) => {
      res.state(404).json({
        message: err.message,
      });
    });
};

module.exports = addProfileController;
