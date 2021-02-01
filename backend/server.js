const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/db");

const dotenv = require("dotenv");

const app = express();
const port = 8000;

dotenv.config();

connectDB();

app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log("Listeing at port", port);
});
