const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const colors = require("colors");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts");

const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", function () {
      console.log("MongoDB connected successfully");
    });

    console.log("Server is Connected to the Database".green.bold.underline);
  } catch (error) {
    console.log(
      "Server is NOT connected to the  Database".red.bold.underline,
      error.message
    );
  }
};

connectDb();

app.get("/", (req, res) => {
  res.json({
    author: "Ogulcan",
    message: "Hello, MERN is awesome!",
  });
});

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`.yellow.bold.inverse);
});
