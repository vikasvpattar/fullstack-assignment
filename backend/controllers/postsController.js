const Post = require("../models/PostsModel.js"); // Import the Post model from the models directory

// Controller function to create a new post
const createPost = async (req, res) => {
  const { title, description } = req.body; // Destructure the title and description from the request body

  // Check if both title and description are provided
  if (!title || !description) {
    return res.json("Enter all the details"); // Return a response if required fields are missing
  }

  try {
    // Attempt to create a new post with the provided title and description
    const post = await Post.create({ title, description });

    // Check if the post was not created successfully
    if (!post) {
      return res.status(500).json("Something went wrong"); // Return an error response if the post creation failed
    }

    // Return a success response with the created post
    res.status(200).json(post);
  } catch (error) {
    // Catch and return any errors encountered during the process
    res.json(error);
  }
};

// Controller function to get a specific post by ID
const getPost = async (req, res) => {
  try {
    const { id } = req.params; // Extract the post ID from the request parameters
    const post = await Post.findById(id); // Find the post by ID in the database

    // Check if the post was not found
    if (!post) {
      return res.status(422).json("Post not found"); // Return an error response if the post was not found
    }

    // Return a success response with the found post
    res.status(200).json(post);
  } catch (error) {
    // Catch and return any errors encountered during the process
    res.json(error).status(422);
  }
};

// Controller function to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Find all posts in the database

    // Check if no posts were found
    if (!posts) {
      return res.status(422).json("Something went wrong"); // Return an error response if no posts were found
    }

    // Return a success response with the list of posts
    res.status(200).json(posts);
  } catch (error) {
    // Catch and return any errors encountered during the process
    res.json(error);
  }
};

module.exports = { createPost, getPost, getAllPosts }; // Export the controller functions for use in other parts of the application
