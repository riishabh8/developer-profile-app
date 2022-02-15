const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const profileRoute = require("./routes/profiles");
const cors = require("cors")
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/developers", profileRoute);

app.listen("5000", function () {
  console.log("Rishabh's Server up and running!!!!");
});
