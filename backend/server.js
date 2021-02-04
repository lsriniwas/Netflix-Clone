const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const request = require("request");

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

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});

app.post("/payment", (req, res) => {
  try {
    const options = {
      ...req.body,
      amount: req.body.amount * 100,
    };
    console.log(req.body);
    instance.orders.create(options, (err, order) => {
      if (err) {
        console.log(err.message);
        return res.status(500).json({ message: "Something went wrong" });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/capture/:paymentId", (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: req.body.amount * 100,
          currency: "INR",
        },
      },
      async function (error, response, body) {
        if (error) {
          console.log(err.message);
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

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
