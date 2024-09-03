//userController.js
const asyncHandler = require("../middleware/asyncHandler.js");
const generateToken = require("../utils/generateToken.js");
const User = require("../models/userModel.js");
const cryptop = require("crypto");
const sendEmail = require("../utils/sendEmail");

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

    const verificationToken = user.generateVerificationToken();
    await user.save();

    const verificationUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/users/verify-email/${verificationToken}`;

    const message = `Please click on the following link to verify your email: ${verificationUrl}`;

    // Use the sendEmail function to send the verification email
    await sendEmail({
      email: user.email,
      subject: "Email Verification",
      message,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      message: "Verification email sent",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Verify email
// @route   GET /api/users/verify-email/:token
// @access  Public
const verifyEmail = asyncHandler(async (req, res) => {
  const verificationToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    verificationToken,
    verificationTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error("Token is invalid or has expired");
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpires = undefined;

  await user.save();

  res.status(200).json({ message: "Email verified successfully" });
});

// @desc    Forgot password
// @route   POST /api/users/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const resetToken = user.generateResetPasswordToken();
  await user.save();

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/users/reset-password/${resetToken}`;

  const message = `Please click on the following link to reset your password: ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message,
    });

    res.status(200).json({ message: "Reset email sent" });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(500);
    throw new Error("Email could not be sent");
  }
});

// @desc    Reset password
// @route   PUT /api/users/reset-password/:token
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error("Token is invalid or has expired");
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ message: "Password reset successful" });
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

// @desc    Update user profile (Verify new email)
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const newEmail = req.body.email;

    if (newEmail && newEmail !== user.email) {
      user.email = newEmail;
      user.isVerified = false; // Require email verification again
      const verificationToken = user.generateVerificationToken();
      await user.save();

      const verificationUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/users/verify-email/${verificationToken}`;

      const message = `Please click on the following link to verify your new email: ${verificationUrl}`;

      await sendEmail({
        email: user.email,
        subject: "Email Verification",
        message,
      });

      res.status(200).json({ message: "Email verification sent" });
      return;
    }

    user.name = req.body.name || user.name;
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
      isVerified: updatedUser.isVerified,
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

module.exports = {
  authUser,
  registerUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateAttacheeApplicationStatus,
  applyForAttacheeStatus,
};
