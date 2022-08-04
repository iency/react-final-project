import React from 'react';
import './Navbar.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="/" className="navbar__leftSection">
        <img 
        className='nav__logo'
        src="https://m.media-amazon.com/images/I/31A+ZEFkDGL._AC_.jpg" 
        alt=""
        />
        <h1><span>Felt</span>MMO</h1>
      </a>
      <div className="navbar__middleSection">
        <a href="/games">Games</a>
        <a href="/">News</a>
        <a href="/">Reviews</a>
        <a href="/"><span>Giveaways</span></a>
      </div>
      <div className="navbar__rightSection">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder='Search FeltMMO.com' type="text" />
      </div>
    </div>
  );
}

export default Navbar;
