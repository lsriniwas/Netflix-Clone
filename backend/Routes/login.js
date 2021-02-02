const express = require("express");
const handleLogin = require("../Controllers/login-controller");

const router = express.Router();

router.post("/login", handleLogin);

module.exports = router;
