const express = require("express");
const addProfileController = require("../Controllers/add-profile-controller");
const authenticateToken = require("../Middleware/authenticateToken");
const getProfilesController = require("../Controllers/get-profiles-controller");
const router = express.Router();

router.post("/auth/addProfile", authenticateToken, addProfileController);
router.get("/auth/getProfiles", authenticateToken, getProfilesController);

module.exports = router;
