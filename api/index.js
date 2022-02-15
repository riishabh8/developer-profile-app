const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const profileRoute = require("./routes/profiles");

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", profileRoute);

app.listen("5000", function () {
  console.log("Rishabh's Server up and running!!!!");
});
