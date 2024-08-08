//userController.js
const asyncHandler = require("../middleware/asyncHandler.js");
const generateToken = require("../utils/generateToken.js");
const User = require("../models/userModel.js");

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.profileUrl = req.body.profileUrl || user.profileUrl;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      profileUrl: updatedUser.profileUrl,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Can not delete admin user");
    }
    await User.deleteOne({ _id: user._id });
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin =
      req.body.isAdmin !== undefined ? Boolean(req.body.isAdmin) : user.isAdmin;
    user.isEmployee =
      req.body.isEmployee !== undefined
        ? Boolean(req.body.isEmployee)
        : user.isEmployee;
    user.isBlogger =
      req.body.isBlogger !== undefined
        ? Boolean(req.body.isBlogger)
        : user.isBlogger;
    user.isAttachee =
      req.body.isAttachee !== undefined
        ? Boolean(req.body.isAttachee)
        : user.isAttachee;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isEmployee: updatedUser.isEmployee,
      isBlogger: updatedUser.isBlogger,
      isAttachee: updatedUser.isAttachee,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Apply for blogger status
// @route   POST /api/users/:id/apply-blogger
// @access  Private
const applyForBloggerStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.bloggerApplicationStatus.applicationStatus === "pending") {
    res.status(400);
    throw new Error("You have already applied for blogger status");
  }

  user.bloggerApplicationStatus = {
    applicationStatus: "pending",
    appliedAt: new Date(),
  };

  await user.save();

  res.json({ message: "Applied for blogger status" });
});

// @desc    Apply for employee status
// @route   POST /api/users/:id/apply-employee
// @access  Private
const applyForEmployeeStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.employeeApplicationStatus.applicationStatus === "pending") {
    res.status(400);
    throw new Error("You have already applied for employee status");
  }

  user.employeeApplicationStatus = {
    applicationStatus: "pending",
    appliedAt: new Date(),
  };

  await user.save();

  res.json({ message: "Applied for employee status" });
});

// @desc    Apply for attachee status
// @route   POST /api/users/:id/apply-attachee
// @access  Private
const applyForAttacheeStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.attacheeApplicationStatus.applicationStatus === "pending") {
    res.status(400);
    throw new Error("You have already applied for attachee status");
  }

  user.attacheeApplicationStatus = {
    applicationStatus: "pending",
    appliedAt: new Date(),
  };

  await user.save();

  res.json({ message: "Applied for attachee status" });
});

// @desc    Update employee application status
// @route   PUT /api/users/:id/employee-application
// @access  Private/Admin
const updateEmployeeApplicationStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (!user.employeeApplicationStatus.appliedAt) {
    res.status(400);
    throw new Error("This user has never applied");
  }

  if (user.employeeApplicationStatus.reviewedAt) {
    res.status(400);
    throw new Error(
      `This user's application has already been reviewed to '${user.employeeApplicationStatus.applicationStatus}'`
    );
  }

  if (user.employeeApplicationStatus.applicationStatus !== "pending") {
    res.status(400);
    throw new Error("Application must be in pending status to be reviewed");
  }

  const { status } = req.body;

  user.employeeApplicationStatus = {
    applicationStatus: status,
    appliedAt: user.employeeApplicationStatus.appliedAt,
    reviewedAt: new Date(),
  };
  user.isEmployee = status === "approved";

  await user.save();

  res.json({ message: `Employee application status updated to '${status}'` });
});

// @desc    Update attachee application status
// @route   PUT /api/users/:id/attachee-application
// @access  Private/Admin
const updateAttacheeApplicationStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (!user.attacheeApplicationStatus.appliedAt) {
    res.status(400);
    throw new Error("This user has never applied");
  }

  if (user.attacheeApplicationStatus.reviewedAt) {
    res.status(400);
    throw new Error(
      `This user's application has already been reviewed to '${user.attacheeApplicationStatus.applicationStatus}'`
    );
  }

  if (user.attacheeApplicationStatus.applicationStatus !== "pending") {
    res.status(400);
    throw new Error("Application must be in pending status to be reviewed");
  }

  const { status } = req.body;

  user.attacheeApplicationStatus = {
    applicationStatus: status,
    appliedAt: user.attacheeApplicationStatus.appliedAt,
    reviewedAt: new Date(),
  };
  user.isAttachee = status === "approved";

  await user.save();

  res.json({ message: `Attachee application status updated to ${status}` });
});

// @desc    Update blogger application status
// @route   PUT /api/users/:id/blogger-application
// @access  Private/Admin
const updateBloggerApplicationStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (!user.bloggerApplicationStatus.appliedAt) {
    res.status(400);
    throw new Error("This user has never applied");
  }

  if (user.bloggerApplicationStatus.reviewedAt) {
    res.status(400);
    throw new Error(
      `This user's application has already been reviewed to '${user.bloggerApplicationStatus.applicationStatus}'`
    );
  }

  if (user.bloggerApplicationStatus.applicationStatus !== "pending") {
    res.status(400);
    throw new Error("Application must be in pending status to be reviewed");
  }

  const { status } = req.body;

  user.bloggerApplicationStatus = {
    applicationStatus: status,
    appliedAt: user.bloggerApplicationStatus.appliedAt,
    reviewedAt: new Date(),
  };
  user.isBlogger = status === "approved";

  await user.save();

  res.json({ message: `Blogger application status updated to ${status}` });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateBloggerApplicationStatus,
  updateEmployeeApplicationStatus,
  updateAttacheeApplicationStatus,
  applyForBloggerStatus,
  applyForEmployeeStatus,
  applyForAttacheeStatus,
};
