const asyncHandler = require("../middleware/asyncHandler.js");
const Blog = require("../models/blogModel.js");

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).populate("user", "name email");
  res.json(blogs);
});

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private/Blogger
const createBlog = asyncHandler(async (req, res) => {
  const { title, desc, coverPhoto, category, content } = req.body;

  const blog = new Blog({
    user: req.user._id,
    title,
    desc,
    coverPhoto,
    category,
    content,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Get blog by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private/Blogger
const updateBlog = asyncHandler(async (req, res) => {
  const { title, desc, coverPhoto, category, content } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title || blog.title;
    blog.desc = desc || blog.desc;
    blog.coverPhoto = coverPhoto || blog.coverPhoto;
    blog.category = category || blog.category;
    blog.content = content || blog.content;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private/Blogger
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
