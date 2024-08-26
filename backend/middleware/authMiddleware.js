const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler.js");
const User = require("../models/userModel.js");

// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // If authenticated through session (Google OAuth), skip JWT verification
  if (req.isAuthenticated()) {
    req.user = req.user;
    return next();
  }

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
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
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

const blogger = (req, res, next) => {
  if (req.user && req.user.isBlogger) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a blogger");
  }
};

const employee = (req, res, next) => {
  if (req.user && req.user.isEmployee) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an employee");
  }
};

module.exports = { protect, admin, blogger, employee };
