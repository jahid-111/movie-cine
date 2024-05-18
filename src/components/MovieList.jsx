/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = getAllMovies();

//   console.log(getImgUrl(movies[0].cover));
  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
           <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
