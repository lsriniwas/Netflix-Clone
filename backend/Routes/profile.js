const express = require("express");
const addProfileController = require("../Controllers/add-profile-controller");
const authenticateToken = require("../Middleware/authenticateToken");

const router = express.Router();

router.post("/auth/addProfile", authenticateToken, addProfileController);

module.exports = router;
