const asyncHandler = require("../middleware/asyncHandler.js");
const EmployeeApplication = require("../models/employeeApplicationModel.js");
const User = require("../models/userModel.js");

// @desc    Apply to be an employee
// @route   POST /api/applications/employee
// @access  Private
const applyEmployee = asyncHandler(async (req, res) => {
  const { resume, coverLetter, recommendationLetters } = req.body;
  const user = req.user;

  const existingApplication = await EmployeeApplication.findOne({
    user: user._id,
  });

  if (existingApplication) {
    res.status(400);
    throw new Error("Employee application already submitted");
  }

  const application = new EmployeeApplication({
    user: user._id,
    resume,
    coverLetter,
    recommendationLetters,
  });

  await application.save();

  user.employeeApplicationStatus = "pending";
  await user.save();

  res.status(201).json({ message: "Employee application submitted" });
});

// @desc    Approve or reject employee application
// @route   PUT /api/applications/employee/:id
// @access  Private/Admin
const updateEmployeeApplication = asyncHandler(async (req, res) => {
  const application = await EmployeeApplication.findById(req.params.id);

  if (!application) {
    res.status(404);
    throw new Error("Application not found");
  }

  const { status } = req.body;
  application.status = status;
  await application.save();

  const user = await User.findById(application.user);
  user.isEmployee = status === "approved";
  user.employeeApplicationStatus = status;
  await user.save();

  res.json({ message: `Employee application ${status}` });
});

module.exports = {
  applyEmployee,
  updateEmployeeApplication,
};
