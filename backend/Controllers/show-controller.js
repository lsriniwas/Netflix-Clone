const Show=require("../Model/show")

// add show/movie to shows collection
const pushShows=async(req,res)=> {
    try {
      let temp= new Show(req.body);
      await temp.save().then(()=>{
        return res.status(200).send("Successfully Added the Show/Movie")
      })
      .catch(err=>{
        return res.status(400).send("Error"+err)
      })
    } catch(err) {
     return res.status(400).send("Error"+err);
    }
  };


 //get all tv-shows/movie from collections
 const handleFetchShows=async(req,res)=>{
  await Show.find()
  .then((Shows)=>res.status(200).json(Shows))  
  .catch(err=>res.status(400).json("Error:" + err));
 }

 module.exports={pushShows,handleFetchShows}
