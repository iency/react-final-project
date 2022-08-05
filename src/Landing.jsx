import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
        <div className="landing__searchBar">
          <input className='landing__searchInput' placeholder='Search for your favorite MMO here' type="text" />
        </div>
      </div>
  );
}

export default Landing;
