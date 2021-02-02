const express = require("express");
const handleLogin = require("../Controllers/login-controller");

const router = express.Router();

router.get("/login", handleLogin);

module.exports = router;
