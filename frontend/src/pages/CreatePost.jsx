import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Get the base URL for API requests from environment variables
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CreatePost = () => {
  // Define state variables for title, description, and error message
  const [title, setTitle] = useState(""); // State to store the post title
  const [error, setError] = useState(""); // State to store any error message
  const [description, setDescription] = useState(""); // State to store the post description

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the form inputs
    if (!title || !description) {
      return setError("Please fill all details"); // Set an error message if inputs are missing
    }

    // Prepare the data to be sent to the API
    const data = { title, description };

    // Make a POST request to the API to create a new post
    const response = await axios.post(`${BASE_URL}/posts`, data);

    // Check the response status and display a success message if the post is created successfully
    if (response.status == 200) {
      toast.success("Successfully created the post"); // Display a success notification
    }
  };

  return (
    <div className="createPost" onSubmit={handleSubmit}>
      <form action="" className="form">
        {/* Display an error message if there's an error */}
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update the description state on input change
          />
        </div>
        <button type="submit">Create Post</button>{" "}
        {/* Submit button to create the post */}
      </form>
    </div>
  );
};

export default CreatePost;
