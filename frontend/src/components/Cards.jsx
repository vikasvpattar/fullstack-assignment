import React from "react";

const Cards = ({ title, description }) => {
  return (
    <article className="card">
      <div className="titleWrapper">
        <h3>{title}</h3>
        <hr className="hr" />
      </div>
      <p>{description}</p>
    </article>
  );
};

export default Cards;
