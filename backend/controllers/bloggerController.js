const asyncHandler = require("../middleware/asyncHandler.js");
const BloggerApplication = require("../models/bloggerApplicationModel.js");
const User = require("../models/userModel.js");

// @desc    Apply to be a blogger
// @route   POST /api/applications/blogger
// @access  Private
const applyBlogger = asyncHandler(async (req, res) => {
  const user = req.user;

  const application = new BloggerApplication({
    user: user._id,
  });

  await application.save();

  user.bloggerApplicationStatus = "pending";
  await user.save();

  res.status(201).json({ message: "Blogger application submitted" });
});

// @desc    Approve or reject blogger application
// @route   PUT /api/applications/blogger/:id
// @access  Private/Admin
const updateBloggerApplication = asyncHandler(async (req, res) => {
  const application = await BloggerApplication.findById(req.params.id);

  if (!application) {
    res.status(404);
    throw new Error("Application not found");
  }

  const { status } = req.body;
  application.status = status;
  await application.save();

  const user = await User.findById(application.user);
  user.isBlogger = status === "approved";
  user.bloggerApplicationStatus = status;
  await user.save();

  res.json({ message: `Blogger application ${status}` });
});

module.exports = {
  applyBlogger,
  updateBloggerApplication,
};
