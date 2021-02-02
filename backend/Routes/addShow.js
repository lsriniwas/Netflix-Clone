const express = require("express");
const {handleFetchShows,pushShows} = require("../Controllers/show-controller");

const router = express.Router();

router.post("/show", pushShows);
router.get("/show",handleFetchShows)

module.exports = router;
