import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav style={style.navbar}>
            <h1 style={style.navlogo}>Movies</h1>
            <h5 style={style.favMoivie}>Favourites</h5>
        </nav>
    </div>
  )
}

const style = {
    navbar: {
        height: '6vh',
        width: '100%',
        backgroundColor: '#02576C',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '10px'   
    },
    navlogo: {
        fontSize: '1.8rem',
         
    },
    favMoivie:{
        fontSize: '1.2rem',
        marginLeft: '1rem'
    }
}
export default Navbar;
