const Show=require('../Model/show')

//Returns entire data of a movie

const fetchMovieInfo=async(req,res)=>{
    const param=req.params
   await Show.findOne(param)
    .populate("genre_ids")
    .then((info) => {
      res.status(200).json({info});
    })
    .catch((err) => {
      res.status(404).json({message: err.message,info:"No movie found in the database"});
    });
}

module.exports=fetchMovieInfo
