import React from "react";
import { search } from "./Movies";

const Header = () => {
  const movie = search;
  return (
    <>
      {movie == "" ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card" style={style.card}>
          <img
            src={`https://www.wallpapertip.com/wmimgs/58-589476_official-venom-movie-poster.jpg`}
            className="card-img-top"
            alt="..."
            style={style.bannerimg}
          />
          <div className="card-body" style={style.cardBody}>
            <h5 className="card-title" style={style.title} >Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
             
          </div>
        </div>
      )}
    </>
  );
};

const style = {
  card: {
    position: "relative",
    margin:'0',
    borderRadius:'0px',
    border:'none'
  },
  cardBody: {
    position: "absolute",
    color:'white',
    left:'20px',
    bottom:'30px'
  },
  title: {
    fontSize: '2.4rem'
  },
  bannerimg: {
    margin: 0,
    padding: 0,
    borderRadius:'0px',
    height: "50vh",
    width: "100%",
  },
};

export default Header;
