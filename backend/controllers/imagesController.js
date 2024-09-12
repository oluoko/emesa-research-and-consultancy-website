const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const fs = require("fs");

// @desc    Upload image to AboutImages or HomeImages
// @route   POST /api/images/upload
// @access  Private/Admin
const uploadImage = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Only admins can upload images here");
  }

  res.status(200).json({
    message: "Image uploaded successfully",
    filePath: req.file.path,
  });
});

// @desc    Get images from AboutImages or HomeImages
// @route   GET /api/images/:type
// @access  Public
const getImages = asyncHandler(async (req, res) => {
  const { type } = req.params;

  let folderPath;
  if (type === "AboutImages") {
    folderPath = "uploads/AboutImages";
  } else if (type === "HomeImages") {
    folderPath = "uploads/HomeImages";
  } else {
    res.status(400);
    throw new Error("Invalid folder type");
  }

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      res.status(500);
      throw new Error("Unable to read images");
    }

    const filePaths = files.map((file) => `${folderPath}/${file}`);
    res.json({ files: filePaths });
  });
});

module.exports = { uploadImage, getImages };
