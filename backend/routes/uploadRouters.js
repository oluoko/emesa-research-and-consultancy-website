const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

const router = express.Router();

// Route to handle image uploads
router.post("/", protect, admin, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

module.exports = router;
