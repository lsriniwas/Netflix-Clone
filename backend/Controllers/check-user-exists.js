const User = require("../Model/UserModel");

const checkUserExists = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({
        error: true,
        message: "Email already exists",
      });
    }
    return res.status(200).send("Proceed");
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = checkUserExists;
