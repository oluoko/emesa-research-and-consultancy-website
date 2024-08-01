const express = require("express");

const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.js");

const router = express.Router();

// http://localhost:8080/posts/ istekleri burada yapılacak
// GET, POST, DELETE, PUT, PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
