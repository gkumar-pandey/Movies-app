import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagenation from "./Pagenation";
import "./MovieCardStyle.css";


const Movie = () => {
  const api_key = process.env.REACT_APP_API_KEY;
   
  const [content, setcontent] = useState([]);
  const [page, setpage] = useState(1);
  const TrendingMoviesList = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`
    );
    
    setcontent(data.results);
  };
  useEffect(() => {
    TrendingMoviesList();
  }, [page]);

  const changePage = (number)=> {
    setpage(number);
    window.scroll(0,0)
  }
  return (
     
      <>
        <h1 style={style.trending}>Trending</h1>

        <div className="movielist" >
          {content.map((item, idx) => {
            return (
              <MovieCard
                img={item.poster_path}
                title={item.original_title || item.name}
                key={item.id}
              />
            );
          })}
        </div>
        <Pagenation paginate={changePage}  />
      </>
     
  );
};

let style = {
  trending: {
    textAlign: "center",
    padding: "1rem",
  },
  
  
};
export default Movie;
