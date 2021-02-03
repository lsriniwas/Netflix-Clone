const express = require("express");
const fetchMovieInfo = require("../Controllers/get-movieInfo-controller");
const {handleFetchShows,pushShows} = require("../Controllers/show-controller");
const {handleFetchTvShow,handleFetchTvShowInfo} = require("../Controllers/tvShow-controller");

const router = express.Router();

router.post("/show", pushShows);
router.get("/show",handleFetchShows)
router.get("/show/watch/:_id",fetchMovieInfo)
router.get("/tvshow",handleFetchTvShow)
router.get("/tvshow/watch/:_id",handleFetchTvShowInfo)

module.exports = router;
