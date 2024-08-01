const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const postRoutes = require("./routes/posts");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    author: "Ogulcan",
    message: "Hello, MERN is awesome!",
  });
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on port: ${PORT}, sir...`.yellow.bold.inverse
      );
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
