import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import './Landing.css';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = e => {
    e.preventDefault();

    navigate("/games");
  };

  return (
    <div className='landing'>
      <form className="landing__searchBar">
        <IconButton type='submit' onClick={search}>
          <SearchIcon fontSize='large' />
        </IconButton>
        <input
          className='landing__searchInput'
          placeholder='Search for your favorite MMO here'
          type="text"
          value={input} onChange={e => setInput(e.target.value)}
        />
      </form>
      <figure className='gendalf'>
        <img
          src="https://i.pinimg.com/originals/8e/f3/17/8ef31747358bc98e361f8206e5b293ea.png"
          alt="" />
      </figure>
    </div>
  );
}

export default Landing;
