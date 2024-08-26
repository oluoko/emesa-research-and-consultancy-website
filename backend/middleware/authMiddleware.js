const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler.js");
const User = require("../models/userModel.js");

// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie or Authorization header
  token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("Not authorized, user not found");
      }

      // Check if email is verified
      if (!req.user.isVerified) {
        res.status(401);
        throw new Error("Not authorized, email not verified");
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403); // 403 Forbidden for authorized user without sufficient permissions
    throw new Error("Not authorized as an admin");
  }
};

// User must be a blogger
const blogger = (req, res, next) => {
  if (req.user && req.user.isBlogger) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as a blogger");
  }
};

// User must be an employee
const employee = (req, res, next) => {
  if (req.user && req.user.isEmployee) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an employee");
  }
};

module.exports = { protect, admin, blogger, employee };
