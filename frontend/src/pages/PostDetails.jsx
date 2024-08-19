import axios from "axios"; // Import axios for making HTTP requests
import React, { useEffect, useState } from "react"; // Import React and hooks
import { useParams } from "react-router-dom"; // Import useParams to get the dynamic URL parameters
import Loader from "../components/Loader.jsx"; // Import Loader component to show a loading spinner

// Get the base URL for API requests from environment variables
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const PostDetails = () => {
  // Define state variables
  const [apiData, setApiData] = useState([]); // State to store the post data fetched from the API
  const [error, setError] = useState(""); // State to store any error message encountered during the API call
  const [isLoading, setIsLoading] = useState(false); // State to track if data is being loaded
  const { id } = useParams(); // Get the post ID from the URL parameters

  // Function to fetch a specific post by ID
  const getPost = async () => {
    setError(""); // Reset error state before making a new request
    setIsLoading(true); // Set loading state to true while fetching data
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`); // Make the API request to fetch post details
      setApiData(response?.data); // Set the fetched post data in state
    } catch (error) {
      setError(error); // Set error state if an error occurs
    }
    setIsLoading(false); // Set loading state to false after fetching data
  };

  // useEffect hook to fetch post data when the component mounts
  useEffect(() => {
    getPost(); // Fetch the post details on component mount
  }, []); // Empty dependency array ensures this runs only once

  // Display the Loader component if data is still loading
  if (isLoading) {
    return <Loader />;
  }

  // Display an error message if an error occurred during the API call
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="detailsWrapper">
      {apiData && (
        <div className="details">
          <h1>{apiData.title}</h1> {/* Display the post title */}
          <p>{apiData.description}</p> {/* Display the post description */}
        </div>
      )}
    </section>
  );
};

export default PostDetails;
