const express = require("express");
const router = express.Router();
const {
  applyBlogger,
  updateBloggerApplication,
} = require("../controllers/bloggerController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.post("/", protect, applyBlogger);
router.put("/:id", protect, admin, updateBloggerApplication);

module.exports = router;
