import React from "react";
import MovieCard from "./MovieCard";
import { search } from "./Movies";

const Movie = () => {
  return (
    <div>
      <h1 style={style.trending}>Trending</h1>

      <div style={style.movielist}>
      {search.map((item, idx) => {
        return <MovieCard img={item.Poster} />;
      })}
      </div>
      
    </div>
  );
};

let style = {
  trending: {
    textAlign: "center",
    padding: "1rem",
  },
  movielist : {
    border: '1px solid red',
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
};
export default Movie;
