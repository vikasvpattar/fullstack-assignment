const express = require("express"); // Import the Express framework
const cors = require("cors"); // Import CORS middleware to enable Cross-Origin Resource Sharing
const postsRoutes = require("./routes/postsRoutes.js"); // Import the routes for handling post-related requests
const mongoose = require("mongoose"); // Import Mongoose for connecting to MongoDB
const dotenv = require("dotenv"); // Import dotenv to load environment variables from a .env file

dotenv.config(); // Load environment variables from the .env file

const app = express(); // Create an Express application

// Apply CORS middleware to allow requests from the specified origin
app.use(cors({ origin: process.env.ORIGIN }));

// Middleware to parse incoming JSON requests
app.use(express.json({ extended: true }));

// Middleware to parse incoming URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Use the postsRoutes for any requests to the /api/posts endpoint
app.use("/api/posts", postsRoutes);

// Connect to the MongoDB database using the URL from environment variables
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(5000, () => console.log("Server started"))) // Start the server on port 5000 if the connection is successful
  .catch((err) => console.log(err)); // Log any errors that occur during the connection process
