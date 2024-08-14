import React from 'react';
import './Navigation.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../../public/nikelogo.png" alt="logo" />
      </div>
      <div className="unorder-list">
        <ul>
          <li><a href="#">New & Featured</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">Customise</a></li>
          <li><a href="#">SNKRS</a></li>
        </ul>
      </div>
      <div className="search-box">
      <SearchIcon className='search-icon' sx={{color:"black",fontSize:"2rem"}} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="cart-box">
        <FavoriteBorderSharpIcon sx={{color:"black"}}/>
        <LocalMallSharpIcon sx={{color:"black",marginLeft:"1rem"}}/>

      </div>
    </nav>
  );
};

export default Navigation;
