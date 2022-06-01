import React from "react";
import { img_500 } from "./Config";
import './MovieCardStyle.css'

const MovieCard = (props) => {
  return (
    <div>
      <div className="cardwidth" style={style.cardwidth} >
        <img src={img_500 + props.img} className="movieposter" alt="..." style={style.movieposter} />

        <h5 className="card-title" style={style.cardtitle}>
          {props.title}
        </h5>

        <div style={style.btnwrapper}>
          <a href="#" className="btn btn-primary" style={style.cardbtn}>
            Add to Favourites
          </a>

        </div>



      </div>
    </div>
  );
};

const style = {
  cardwidth: {
    width: "20rem",
    position: "relative",
    height: 'auto',

    border: 'none',
    // border: '1px solid red',
    margin: '1rem 0rem',


  },
  movieposter: {
    height: '100%',
    width: '100%',
    borderRadius: '10px',


  },
  cardtitle: {
    position: 'absolute',
    top: '4rem',
    color: 'white',
    //  border: '1px solid white',
    width: '100%',
    fontSize: '1.8rem',
    textAlign: 'center'

  },
  btnwrapper: {
    position: 'absolute',
    bottom: '3rem',
    width: '100%',
    textAlign: 'center'
  }

};

export default MovieCard;
