// routes/googleAuthRoutes.js
const express = require("express");
const {
  getGoogleAuthUrl,
  googleOAuthCallback,
} = require("../controllers/googleAuthController.js");

const router = express.Router();

// Route for getting Google OAuth URL
router.post("/google", getGoogleAuthUrl);

// Route for Google OAuth callback
router.post("/google/callback", googleOAuthCallback);

module.exports = router;
