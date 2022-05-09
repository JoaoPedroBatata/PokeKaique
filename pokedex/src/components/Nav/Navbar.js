import React from "react";
import './Navbar.css'

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav>
      <div>
          <img
          alt="pokeapi-logo" 
          src = {logoImg}
          className="navbar-img"
          />
      </div>
    </nav>
  );
};

export default Navbar;
