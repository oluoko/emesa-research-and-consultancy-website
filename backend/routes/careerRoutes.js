const express = require("express");
const {
  getCareers,
  createCareer,
  getCareerById,
  deleteCareer,
} = require("../controllers/careerController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").get(getCareers).post(protect, admin, createCareer);
router.route("/:id").get(getCareerById).delete(protect, admin, deleteCareer);

module.exports = router;
