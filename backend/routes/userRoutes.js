const express = require("express");
const {
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
router.route("/verify-email/:token").get(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").put(resetPassword);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

router.put(
  "/:id/attachee-application",
  protect,
  admin,
  updateAttacheeApplicationStatus
);
router.post("/:id/apply-attachee", protect, applyForAttacheeStatus);

module.exports = router;
