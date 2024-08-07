const asyncHandler = require("../middleware/asyncHandler.js");
const Career = require("../models/careerModel.js");

// @desc    Get all careers
// @route   GET /api/careers
// @access  Public
const getCareers = asyncHandler(async (req, res) => {
  const careers = await Career.find({}).populate('user', 'name email');
  res.json(careers);
});

// @desc    Create a new career
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = asyncHandler(async (req, res) => {
  const { position, description } = req.body;

  const career = new Career({
    user: req.user._id,
    position,
    description,
  });

  const createdCareer = await career.save();
  res.status(201).json(createdCareer);
});

// @desc    Get career by ID
// @route   GET /api/careers/:id
// @access  Public
const getCareerById = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id).populate('user', 'name email');

  if (career) {
    res.json(career);
  } else {
    res.status(404);
    throw new Error("Career not found");
  }
});

// @desc    Delete career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = asyncHandler(async (req, res) => {
  const career = await Career.findById(req.params.id);

  if (career) {
    await career.remove();
    res.json({ message: "Career removed" });
  } else {
    res.status(404);
    throw new Error("Career not found");
  }
});

module.exports = {
  getCareers,
  createCareer,
  getCareerById,
  deleteCareer,
};
