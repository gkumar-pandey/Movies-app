import React, { useState } from "react";
import { img_500 } from "./Config";
import './MovieCardStyle.css'

const MovieCard = (props) => {
  const [mouseEnter, setmouseEnter] = useState(false)
  const IsMouseEnter = () => {
    setmouseEnter(true)
  }
  const IsMouseLeave = () => {
    setmouseEnter(false)

  }
  return (

    <div className="cardwidth" onMouseEnter={IsMouseEnter} onMouseLeave={IsMouseLeave} >
      <img src={img_500 + props.img} className="movieposter" alt="..." />

      <h5 className="cardtitle"  >
        {props.title}
      </h5>

      {
        mouseEnter ? <div className="btnwrapper">
          <a href="#" className="btn btn-primary">
            Add to Favourites
          </a>

        </div> : ''
      }




    </div>

  );
};



export default MovieCard;
