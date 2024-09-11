const { OAuth2Client } = require("google-auth-library");
const asyncHandler = require("../middleware/asyncHandler.js");
const googleClientID = process.env.CLIENT_ID;
const googleClientSecret = process.env.CLIENT_SECRET;
const redirectURL = process.env.REDIRECT_URI;
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
} = require("../envFolder/envFolder.js");

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
// @route   GET /api/auth/google/callback
// @access  Public
const googleOAuthCallback = asyncHandler(async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    const googleUserData = await getUserData(tokens.access_token);

    if (!googleUserData) {
      res.status(400);
      throw new Error("Failed to retrieve user data from Google");
    }

    // Check if the user already exists
    let user = await User.findOne({ email: googleUserData.email });

    if (!user) {
      // If the user doesn't exist, create a new user with a default password
      user = new User({
        name: googleUserData.name,
        email: googleUserData.email,
        password: "googleoauth", // You can handle this case with more logic if needed
      });

      // Save the new user to the database
      await user.save();
    }

    // Generate a JWT token
    generateToken(res, user._id);

    // Return user info to the frontend (optional, you can redirect to your frontend here)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Error with Google OAuth callback");
  }
});

module.exports = {
  getGoogleAuthUrl,
  googleOAuthCallback,
};
