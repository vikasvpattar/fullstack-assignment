import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAllPosts = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setApiData(response?.data);
      setFilteredData(response?.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query) {
      const filtered = apiData.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(apiData);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    <div>{error}</div>;
  }

  return (
    <main className="main">
      <section className="hero">
        <div className="containerHero">
          <h2 className="">How can we help?</h2>
        </div>
        <form action="" className="searchWrapper">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            name="search"
            id="search"
          />
          <FaArrowRight className="icon" size={24} />
        </form>
      </section>
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
