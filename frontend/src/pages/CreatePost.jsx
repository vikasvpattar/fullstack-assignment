import axios from "axios";
import React, { useState } from "react";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return setError("Please fill all details");
    }
    const data = { title, description };
    const response = await axios.post(`${BASE_URL}/posts`, data);
    console.log(response);
  };

  return (
    <div className="createPost" onSubmit={handleSubmit}>
      <form action="" className="form">
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
