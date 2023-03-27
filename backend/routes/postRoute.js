const express = require("express");
const {
  getAllPosts,
  createPosts,
  updatepost,
  deletePost,
  postDetails,
  postByUser,
} = require("../controllers/postController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/posts").get(getAllPosts);
router.route("/post/new").post(isAuthenticatedUser, createPosts);
router.route("/me/post").post(isAuthenticatedUser, postByUser);
router.route("/post/:id").put(isAuthenticatedUser, updatepost);
router.route("/post/delete/:id").delete(isAuthenticatedUser, deletePost);
router.route("/post/details/:id").post(isAuthenticatedUser, postDetails);

module.exports = router;
