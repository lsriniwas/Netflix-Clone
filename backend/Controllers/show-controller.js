const Show = require("../Model/show");

// add show/movie to shows collection
const pushShows = async (req, res) => {
  try {
    let temp = new Show(req.body);
    await temp
      .save()
      .then(() => {
        return res.status(200).send("Successfully Added the Show/Movie");
      })
      .catch((err) => {
        return res.status(400).send("Error" + err);
      });
  } catch (err) {
    return res.status(400).send("Error" + err);
  }
};

//get all tv-shows/movie from collections
const handleFetchShows = async (req, res) => {
  let temp = await Show.find({});

  Show.populate(temp, "genre_ids")
    .then((shows) => {
      let actionData = {
        title: "Action",
        data: [],
      };

      let romanceData = {
        title: "Romance",
        data: [],
      };

      let comedyData = {
        title: "Comedy",
        data: [],
      };

      let horrorData = {
        title: "Horror",
        data: [],
      };

      shows.forEach((data) => {
        const genere = data.genre_ids.map((genere) => genere.name);
        if (genere.includes("Action")) {
          actionData.data.push(data);
        }
        if (genere.includes("Comedy")) {
          comedyData.data.push(data);
        }
        if (genere.includes("Romance")) {
          romanceData.data.push(data);
        }
        if (genere.includes("Horror")) {
          horrorData.data.push(data);
        }
      });
      let results = [actionData, horrorData, comedyData, romanceData];

      res.status(200).json(results);
    })
    .catch((err) => res.status(400).json("Error:" + err));
};

module.exports = { pushShows, handleFetchShows };
