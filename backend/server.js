const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
dotenv.config();
const connectDB = require("./config/db.js");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
require("./config/passport"); // Initialize passport

const userRoutes = require("./routes/userRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const careerRoutes = require("./routes/careerRoutes.js");
const uploadRoutes = require("./routes/uploadRoutes.js");

const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/config", (req, res) => {
  res.json({ port: process.env.PORT });
});

const uploadsDir = path.join(__dirname, "/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

//  Add session middleware and initializa passport:
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/upload", uploadRoutes);

// Serve uploaded files
app.use("/uploads", express.static(uploadsDir));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
