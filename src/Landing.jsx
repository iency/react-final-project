import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <img 
      src="https://www.pcgamesn.com/wp-content/uploads/2022/01/best-mmo-games-lost-ark.jpg" 
      alt="" 
      />
        <div className="landing__searchBar">
          <input className='landing__searchInput' placeholder='Search MMO games...' type="text" />
        </div>
    </div>
  );
}

export default Landing;
