const mongoose = require("mongoose");
const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { email, password, plan } = req.body;
    const user = await User.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({
        error: true,
        message: "Email already exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    User.create({
      email,

      password: hashPassword,
    }).then((user) => {
      return res.status(200).json({
        message: "Registered Successfully",
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = registerUser;
