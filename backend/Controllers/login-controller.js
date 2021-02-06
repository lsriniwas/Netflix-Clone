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
        message:
          "Sorry, we can't find an account with this email address. Please try again or",
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
        message: "Incorrect password. Please try again",
      });
      return;
    }
  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = handleLogin;
