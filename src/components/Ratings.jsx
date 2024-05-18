import React from "react";
import Star from "../assets/star.svg";
const Ratings = ({ value }) => {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, i) => (
        <img key={i} src={star} width="14" height="14" alt="Rating"></img>
      ))}
    </>
  );
};

export default Ratings;
