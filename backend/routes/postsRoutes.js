const { Router } = require("express");
const {
  createPost,
  getPost,
  getAllPosts,
} = require("../controllers/postsController.js");

const router = Router();
router.get("/", getAllPosts); // Route to get all posts
router.get("/:id", getPost); // Route to get single post
router.post("/", createPost); // Route to create post

module.exports = router;
