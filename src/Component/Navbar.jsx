import React from "react";
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav  className='navbar'>
        <div className="logowrapper">
          <h1 className="navlogo">Movies</h1>
          <h5 className="favMovie">Favourites</h5>
        </div>

        <form className="d-flex searchbar" role="search"  >
          <input
            className="form-control shadow-none me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

const style = {
  
   
   
   
 
};
export default Navbar;
