const express = require("express");
const {
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
} = require("../controllers/userController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

router.put(
  "/:id/blogger-application",
  protect,
  admin,
  updateBloggerApplicationStatus
);
router.put(
  "/:id/employee-application",
  protect,
  admin,
  updateEmployeeApplicationStatus
);
router.put(
  "/:id/attachee-application",
  protect,
  admin,
  updateAttacheeApplicationStatus
);

router.post("/:id/apply-blogger", protect, applyForBloggerStatus);
router.post("/:id/apply-employee", protect, applyForEmployeeStatus);
router.post("/:id/apply-attachee", protect, applyForAttacheeStatus);

module.exports = router;
