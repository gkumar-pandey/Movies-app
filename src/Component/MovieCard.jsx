import React from "react";
import { img_500 } from "./Config";
import './MovieCardStyle.css'

const MovieCard = (props) => {
  return (

    <div className="cardwidth"  >
      <img src={img_500 + props.img} className="movieposter" alt="..."  />

      <h5 className="cardtitle"  >
        {props.title}
      </h5>

      <div  className="btnwrapper">
        <a href="#" className="btn btn-primary">
          Add to Favourites
        </a>

      </div>



    </div>

  );
};

 

export default MovieCard;
