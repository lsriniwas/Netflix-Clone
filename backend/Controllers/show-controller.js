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
        type: "Movie",
        data: [],
      };

      let romanceData = {
        title: "Romance",
        data: [],
      };

      let comedyData = {
        title: "Comedy",
        type: "Movie",
        data: [],
      };

      let horrorData = {
        title: "Horror",
        type: "Movie",
        data: [],
      };

      let adventureData = {
        title: "Adventure",
        type: "Movie",
        data: [],
      };

      let animationData = {
        title: "Animation",
        type: "Movie",
        data: [],
      };

      let dramaData = {
        title: "Drama",
        type: "Movie",
        data: [],
      };

      let familyData = {
        title: "Family",
        type: "Movie",
        data: [],
      };

      let scienceFictionData = {
        title: "Science Fiction",
        type: "Movie",
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
        if (genere.includes("Adventure")) {
          adventureData.data.push(data);
        }
        if (genere.includes("Animation")) {
          animationData.data.push(data);
        }
        if (genere.includes("Drama")) {
          dramaData.data.push(data);
        }
        if (genere.includes("Family")) {
          familyData.data.push(data);
        }
        if (genere.includes("Science Fiction")) {
          scienceFictionData.data.push(data);
        }
      });

      adventureData.data.reverse();
      comedyData.data.reverse();
      dramaData.data.reverse();
      scienceFictionData.data.reverse();

      let results = [
        actionData,
        romanceData,
        comedyData,
        adventureData,
        familyData,
        dramaData,
        horrorData,
        animationData,
        scienceFictionData,
      ];

      res.status(200).json(results);
    })
    .catch((err) => res.status(400).json("Error:" + err));
};

module.exports = { pushShows, handleFetchShows };
