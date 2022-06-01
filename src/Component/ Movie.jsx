import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";



 
const Movie = () => {
  const [content, setcontent] = useState([]);

  const TrendingMoviesList = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=5dd3b7469943c761e37c9378b1a51f26`
    );
    setcontent(data.results)
    
  };
  useEffect(()=>{
    TrendingMoviesList();
  },[])
  console.log(content)
  return (
    <div>
      <h1 style={style.trending}>Trending</h1>

      <div style={style.movielist}>
        {content.map((item, idx) => {
           
          return <MovieCard img={item.poster_path} title={item.original_title || item.name} key={item.idx} />;
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
  movielist: {
    // border: "1px solid red",
    padding: '0rem 4rem',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    
  },
};
export default Movie;
