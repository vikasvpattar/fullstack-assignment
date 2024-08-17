const Post = require("../models/PostsModel.js");
const createPost = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.json("Enter all the details");
  }
  try {
    const post = await Post.create({ title, description });
    if (!post) {
      res.status(500).json("Something went wrong");
    }
    res.status(200).json(post);
  } catch (error) {
    res.json(error);
  }
};
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(422).json("Post not found");
    }
    res.status(200).json(post);
  } catch (error) {
    res.json(error).status(422);
  }
};
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      res.status(422).json("Something went wrong");
    }
    res.status(200).json(posts);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createPost, getPost, getAllPosts };
