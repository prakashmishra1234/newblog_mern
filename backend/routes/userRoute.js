const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  registerUser,

  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  deleteRequest,
} = require("../controllers/userController");
const { validateRegister, SignupSchema } = require("../utils/validation");

const router = express.Router();

router.route("/register").post(validateRegister(SignupSchema), registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logout);
router.route("/delete-request").post(isAuthenticatedUser, deleteRequest);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
