import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6"; // Import the right arrow icon from Font Awesome
import Cards from "../components/Cards"; // Import the Cards component
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import axios from "axios"; // Import axios for making HTTP requests
import Loader from "../components/Loader"; // Import the Loader component to show a loading spinner

// Get the base URL for API requests from environment variables
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Home = () => {
  // Define state variables
  const [apiData, setApiData] = useState([]); // State to store the data fetched from the API
  const [search, setSearch] = useState(""); // State to store the search query input by the user
  const [error, setError] = useState(""); // State to store any error message encountered during the API call
  const [filteredData, setFilteredData] = useState([]); // State to store the filtered data based on the search query
  const [isLoading, setIsLoading] = useState(false); // State to track if data is being loaded

  // Function to fetch all posts from the API
  const getAllPosts = async () => {
    setError(""); // Reset error state before making a new request
    setIsLoading(true); // Set loading state to true while fetching data
    try {
      const response = await axios.get(`${BASE_URL}/posts`); // Make the API request
      setApiData(response?.data); // Set the API data in state
      setFilteredData(response?.data); // Initialize filtered data with the fetched API data
    } catch (error) {
      setError(error); // Set error state if an error occurs
    }
    setIsLoading(false); // Set loading state to false after fetching data
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getAllPosts(); // Fetch all posts on component mount
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle the search input change event
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase(); // Get the search query and convert it to lowercase
    setSearch(query); // Update the search state

    if (query) {
      // If there is a search query, filter the API data based on the query
      const filtered = apiData.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredData(filtered); // Update the filtered data state
    } else {
      setFilteredData(apiData); // If search query is empty, reset to original API data
    }
  };

  // Display the Loader component if data is still loading
  if (isLoading) {
    return <Loader />;
  }

  // Display an error message if an error occurred during the API call
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="main">
      {/* Hero Section with a search form */}
      <section className="hero">
        <div className="containerHero">
          <h2 className="">How can we help?</h2>
        </div>
        <form action="" className="searchWrapper">
          <input
            type="text"
            value={search}
            onChange={handleChange} // Handle search input changes
            name="search"
            id="search"
          />
          <FaArrowRight className="icon" size={24} /> {/* Search button icon */}
        </form>
      </section>

      {/* Cards Section to display the list of posts */}
      <section className="cardsWrapper">
        {filteredData.length > 0 &&
          filteredData.map((data) => {
            return (
              <Link key={data._id} to={data._id} className="cardContainer">
                <Cards title={data.title} description={data.description} />
              </Link>
            );
          })}
      </section>
    </main>
  );
};

export default Home;
