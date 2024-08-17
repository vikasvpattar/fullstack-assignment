const { Router } = require("express");
const {
  createPost,
  getPost,
  getAllPosts,
} = require("../controllers/postsController.js");

const router = Router();
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);

module.exports = router;
