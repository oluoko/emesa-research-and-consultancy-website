const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../utils/upload");
const { uploadImage, getImages } = require("../controllers/imagesController");

// Route for admin uploads to AboutImages or HomeImages
router.post("/upload", protect, admin, upload.single("image"), uploadImage);

// Route for getting images from AboutImages or HomeImages
router.get("/:type", getImages);

module.exports = router;
