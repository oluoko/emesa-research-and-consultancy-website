const express = require("express");
const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController.js");
const { protect, blogger } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").get(getBlogs).post(protect, blogger, createBlog);
router
  .route("/:id")
  .get(getBlogById)
  .put(protect, blogger, updateBlog)
  .delete(protect, blogger, deleteBlog);

module.exports = router;
