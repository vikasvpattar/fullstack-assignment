const express = require("express");
const cors = require("cors");
const postsRoutes = require("./routes/postsRoutes.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/posts", postsRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(5000, () => console.log("Server started")))
  .catch((err) => console.log(err));
