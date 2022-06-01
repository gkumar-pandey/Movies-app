import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <div className="card" style={style.cardwidth}>
        <img src={props.img} className="card-img-top" alt="..." style={style.movieposter}/>
        <h5 className="card-title" style={style.cardtitle}>
          Card title
        </h5>

        <a href="#" className="btn btn-primary" style={style.cardbtn}>
          Add to Favourites
        </a>
      </div>
    </div>
  );
};

const style = {
  cardwidth: {
    width: "20rem",
    position: "relative",
    height: '500px',
    padding: '1rem',
    border: 'none' 
  },
  movieposter: {
    height: '100%',
    width:'100%',
    borderRadius: '10px'
  },
  cardtitle: {
    position: "absolute",
    top: "4rem",
    color: "white",
    fontSize: "2rem",
    left: "5rem",
  },
  cardbtn: {
    position: "absolute",
    bottom: "30%",
    left: "25%",
    width: '10rem',
    padding: '10px',
    fontSize: '1rem'

  },
};

export default MovieCard;
