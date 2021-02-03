const express = require("express");
const addProfileController = require("../Controllers/add-profile-controller");
const authenticateToken = require("../Middleware/authenticateToken");
const getProfilesController = require("../Controllers/get-profiles-controller");
const getProfileController = require("../Controllers/get-profile-controller");
const likeShowController = require("../Controllers/handle-like");
const dislikeShowController = require("../Controllers/handle-dislike");
const addToListController = require("../Controllers/add-toList-controller");

const router = express.Router();

router.post("/auth/addProfile", authenticateToken, addProfileController);

router.get("/auth/getProfiles", authenticateToken, getProfilesController);

router.get(
  "/auth/getProfile/:profileId",
  authenticateToken,
  getProfileController
);

router.post(
  "/auth/profile/like/:showId",
  authenticateToken,
  likeShowController
);

router.post(
  "/auth/profile/dislike/:showId",
  authenticateToken,
  dislikeShowController
);

router.post(
  "/auth/profile/addToList/:showId",
  authenticateToken,
  addToListController
);

module.exports = router;
