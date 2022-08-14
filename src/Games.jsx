import React, { useEffect, useState } from 'react';
import './Games.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Games = (props) => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  async function getGames() {
    const { data } = await axios.get("https://www.freetogame.com/api/games");
    setGames(data);
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className='games'>
      <select
        id="filter"
        
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Sort
        </option>
        <option value="RELEASE_DATE_ASCENDING">New to Old</option>
        <option value="RELEASE_DATE_DESCENDING">Old to New</option>
        <option value="PLATFORM_PC">PC (Windows)</option>
        <option value="PLATFORM_">Web Browser</option>
      </select>
      <div className="games__searchBar">

      </div>
      <div className="games__list">
        {games.map((game) => (
          <div className="game" key={game.id} onClick={() => navigate(`${game.id}`)}>
            <div className="game__card">
              <div className="game__cardContainer--img">
                <img src={game.thumbnail} className="game__img"></img>
              </div>
              <div className="game__cardContainer--text">
                <h3>{game.title}</h3>
                <p>
                  {game.short_description}
                </p>
                <p>
                  <b>Genre:</b> {game.genre}
                </p>
                <p>
                  <b>Platform:</b> {game.platform}
                </p>
                <p>
                  <b>Developer:</b> {game.developer}
                </p>
                <p>
                  <b>Release date:</b> {game.release_date}
                </p>
              </div>
            </div>
          </div>
        ))};
      </div>
    </div>
  );
}

export default Games;
