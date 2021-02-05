const TVShow = require("../Model/tvShow");
const Seasons = require("../Model/seasons");
const Episodes=require("../Model/episode")
const Show = require("../Model/show");

   const searchFetchShows = async (req, res) => {
       const {q}=req.query
       if(q.length>0){
        let temp = await Show.find( { title: { $regex:new RegExp(q),'$options' : 'i'} } );
        Show.populate(temp, "genre_ids")
        .then(async(shows) => {

            await TVShow.find( { name: { $regex:new RegExp(q),'$options' : 'i'}})
            .populate("genre_ids")
            .then(async(data)=>await Seasons.populate(data,"seasons"))
            .then(async(data)=>await Episodes.populate(data,{path:"seasons.episodes"}))
            .then((data)=>{
                return res.status(200).json([...data,...shows])
            })
            .catch(err=> {return res.status(400).send("Error"+err)})
        })
        .catch((err) =>{return res.status(400).json("Error:" + err)});
    }
    else{
        return res.status(200).json([])
    }

  };
  
  module.exports = {searchFetchShows };
  