const express = require("express");
const fetchMovieInfo = require("../Controllers/get-movieInfo-controller");
const {handleFetchShows,pushShows} = require("../Controllers/show-controller");

const router = express.Router();

router.post("/show", pushShows);
router.get("/show",handleFetchShows)
router.get("/watch/:_id",fetchMovieInfo)

module.exports = router;
