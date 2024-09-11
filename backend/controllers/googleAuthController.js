// controllers/googleAuthController.js
const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require("../middleware/asyncHandler.js");
const googleClientID = process.env.CLIENT_ID;
const googleClientSecret = process.env.CLIENT_SECRET;
const redirectURL = process.env.REDIRECT_URI;

const oAuth2Client = new OAuth2Client(
  googleClientID,
  googleClientSecret,
  redirectURL
);

console.log("Google Client ID:", process.env.CLIENT_ID);
console.log("Google Client Secret:", process.env.CLIENT_SECRET);

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
// @route   GET /api/auth/google/callback
// @access  Public
const googleOAuthCallback = asyncHandler(async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    const userData = await getUserData(tokens.access_token);

    if (!userData) {
      res.status(400);
      throw new Error("Failed to retrieve user data from Google");
    }

    // Here, you can handle user login/signup with your database
    console.log("Google User Data:", userData);
    res.json(userData);
  } catch (error) {
    res.status(500);
    throw new Error("Error with Google OAuth callback");
  }
});

module.exports = {
  getGoogleAuthUrl,
  googleOAuthCallback,
};
