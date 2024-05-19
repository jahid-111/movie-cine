/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { getImgUrl } from "../utilities/mov-img";
import Ratings from "./Ratings";
import ModalMovDet from "./ModalMovDet";
import { MovieContext } from "../context/context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { cardData, setCardData } = useContext(MovieContext);

  function handleModadlClose() {
    setSelectedItem(null);
    showModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedItem(movie);
    setShowModal(true);
  }

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      console.error("Already Added...!");
    }
  }
  return (
    <>
      {showModal && (
        <ModalMovDet
          onCardAdd={handleAddToCart}
          movie={selectedItem}
          onClose={handleModadlClose}
        ></ModalMovDet>
      )}

      <figure
        id={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating}></Ratings>
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
