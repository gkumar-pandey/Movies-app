import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { img_original } from "./Config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";

const Header = () => {
  const [crouselMovies, setcrouselMovies] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const [page, setpage] = useState(1);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`
    );
    const TopfiveMoviesForCrousel = data.results.slice(0, 5);
    setcrouselMovies(TopfiveMoviesForCrousel);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(crouselMovies);
  return (
    <>
      {crouselMovies.length == 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {crouselMovies.map((movie, idx) => {
            return (
              <SwiperSlide key={movie.id}>
                <div style={style.swipercontainer}>
                  <div style={style.title}>
                    <div style={style.titleOverviewContainer}>
                      <h2 style={style.movieTitle}>
                        {movie.name || movie.original_title}
                      </h2>
                      <p style={style.movieOverview}>{movie.overview}</p>
                    </div>
                  </div>
                  <img
                    src={img_original + movie.backdrop_path}
                    style={style.img}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

const style = {
  card: {
    position: "relative",
    margin: "0",
    borderRadius: "0px",
    border: "none",
  },
  cardBody: {
    position: "absolute",
    color: "white",
    left: "20px",
    bottom: "30px",
  },
  swipercontainer: {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
  },
  title: {
    width: "100wh",
    height: "80vh",

    color: "white",
  },
  titleOverviewContainer: {
    position: "absolute",
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    padding: "1rem",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-end",
    height: "100%",
  },
  movieTitle: {
    fontSize: "3rem",
  },
  movieOverview: {
    fontSize: "1.3rem",
  },
  bannerimg: {
    margin: 0,
    padding: 0,
    borderRadius: "0px",
    height: "50vh",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "80vh",
  },
};

export default Header;
