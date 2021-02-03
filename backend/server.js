const express = require("express");
const cors = require("cors");
const users = require("./Model/UserModel");
const geners = require("./Model/genre");
const registerRoute = require("./Routes/register");
const loginRoute = require("./Routes/login");
const showRoute = require("./Routes/addShow");
const profileRoute = require("./Routes/profile");
const connectDB = require("./Config/db");

const dotenv = require("dotenv");

const app = express();
const port = 8000;
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", showRoute);
app.use("/api", profileRoute);

app.use("/users", async (req, res) => {
  await users
    .find()
    .populate({
      path: "profiles",
    })
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((err) => console.log(err.message));
});

app.use("/geners", async (req, res) => {
  await geners
    .find()
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((err) => console.log(err.message));
});
app.listen(port, () => {
  console.log("Listeing at port", port);
});
