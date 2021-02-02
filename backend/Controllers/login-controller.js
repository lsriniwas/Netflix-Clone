const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(400).json({
        error: true,
        message: "Email does not exist",
      });
      return;
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const accessToken = jwt.sign({ data: user._id }, process.env.SECRET_KEY, {
        expiresIn: "360000s",
      });

      return res.status(200).json({
        token: accessToken,
      });
    } else {
      res.status(400).json({
        error: true,
        success: false,
        message: "Wrong Password enterd",
      });
      return;
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: "Somthing went wrong",
    });
  }
};

module.exports = handleLogin;
