const express = require("express");
const Joi = require("joi");

const registerUser = require("../Controllers/register-controller");

const validateUser = require("../Middleware/validateUser");

const router = express.Router();

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});

router.post("/register", validateUser(schema), registerUser);

module.exports = router;
