const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const googleAuthRoutes = require("./routes/googleAuthRoutes.js");
const imagesRoutes = require("./routes/imagesRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", googleAuthRoutes);
app.use("/images", imagesRoutes);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `\nServer is running in ${process.env.NODE_ENV} mode on port ${port}\n`.blue
      .bold.underline.inverse
  );
});
