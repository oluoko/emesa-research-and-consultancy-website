const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Add this
dotenv.config();
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const { OAuth2Cient } = require("google-auth-library");
const router = express.Router();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS for frontend
app.use(
  cors({
    origin: "*", // Allow requests from your frontend
    credentials: true, // Enable credentials if you're using cookies or authorization headers
  })
);

/* GET users listing. */
router.post("/", async function (req, res, next) {
  res.header("Access-Controll-Allow-Origin", "http:localhost:5173");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectURL = "http://127.0.0.1.3000/oauth";

  const oAuth2Client = new OAuth2Cient(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectURL
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/userinfo.profile openid",
  });
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
