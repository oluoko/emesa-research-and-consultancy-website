const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require("../middleware/asyncHandler.js");
const redirectURL = process.env.REDIRECT_URI;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require("../env.js");
const { use } = require("passport");

const googleClientID = process.env.CLIENT_ID;
const googleClientSecret = process.env.CLIENT_SECRET;
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

const oAuth2Client = new OAuth2Client(
  googleClientID || CLIENT_ID,
  googleClientSecret || CLIENT_SECRET,
  redirectURL || REDIRECT_URI
);

// @desc    Generate Google OAuth URL
// @route   POST /api/auth/google
// @access  Public
const getGoogleAuthUrl = asyncHandler(async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Referrer-Policy", "no-referrer-when-downgrade");

    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
      prompt: "consent",
    });

    res.json({ url: authorizeUrl });
  } catch (error) {
    res.status(500);
    throw new Error("Failed to generate Google OAuth URL");
  }
});

// Function to get user data from Google API
const getUserData = async (access_token) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  const data = await response.json();
  return data;
};

// @desc    Handle Google OAuth callback
// @route   POST /api/auth/google/callback
// @access  Public
const googleOAuthCallback = asyncHandler(async (req, res) => {
  const { code } = req.body;

  if (!code) {
    res.status(400);
    throw new Error("Invalid authorization code");
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    if (!tokens.access_token) {
      res.status(400);
      throw new Error("Failed to retrieve access token from Google");
    }

    const googleUserData = await getUserData(tokens.access_token);

    if (!googleUserData) {
      res.status(400);
      throw new Error("Failed to retrieve user data from Google");
    }

    const userExists = await User.findOne({ email: googleUserData.email });

    if (userExists) {
      const token = generateToken(res, userExists._id);

      return res.status(201).json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
        isAdmin: userExists.isAdmin,
        isVerified: userExists.isVerified,
        profilePic: userExists.profilePic,
        token: token,
      });
    }

    const user = await User.create({
      name: googleUserData.name,
      email: googleUserData.email,
      password: "googleoauth",
      isVerified: true,
      profilePic: googleUserData.picture, // Set profile picture from Google
    });

    if (user) {
      const token = generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isVerified: true,
        profilePic: user.profilePic,
        token: token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    console.error("Error with Google OAuth callback:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
  }
});

module.exports = {
  getGoogleAuthUrl,
  googleOAuthCallback,
};
