const express = require("express");
const router = express.Router();
const {
  applyEmployee,
  updateEmployeeApplication,
} = require("../controllers/employeeController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.post("/", protect, applyEmployee);
router.put("/:id", protect, admin, updateEmployeeApplication);

module.exports = router;
