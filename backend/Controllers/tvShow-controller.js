const TVShow = require("../Model/tvShow");
const Seasons = require("../Model/seasons");
const Episodes=require("../Model/episode")

//returns all the tv shows
const handleFetchTvShow=async(req,res)=>{
    await TVShow.find()
    .populate("genre_ids")
    .then(async(data)=>await Seasons.populate(data,"seasons"))
    .then(async(data)=>await Episodes.populate(data,{path:"seasons.episodes"}))
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch(()=>{
        return res.status(404).json({message:"Error Fetching the data"})
    })

}
//returns single tv show info.
const handleFetchTvShowInfo=async(req,res)=>{
 await TVShow.findById(req.params._id)
 .populate("genre_ids")
 .then(async(data)=>await Seasons.populate(data,"seasons"))
 .then(async(data)=>await Episodes.populate(data,{path:"seasons.episodes"}))
 .then((data)=>{
     return res.status(200).json(data)
 })
 .catch(()=>{
     return res.status(404).json({message:"Error Fetching the data"})
 })
}

  module.exports={handleFetchTvShow,handleFetchTvShowInfo}
