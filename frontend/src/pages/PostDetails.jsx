import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const PostDetails = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const getPost = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`);
      setApiData(response?.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getPost();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    <div>{error}</div>;
  }
  return (
    <section className="detailsWrapper">
      {apiData && (
        <div className="details">
          <h1>{apiData.title}</h1>
          <p>{apiData.description}</p>
        </div>
      )}
    </section>
  );
};

export default PostDetails;
