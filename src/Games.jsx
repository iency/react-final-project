import React, { useEffect, useState } from 'react';
import './Games.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);
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
      <div className="games__searchBar">

      </div>
      <div className="games__list">
        {games.map((game) => (
          <div className="game" key={game.id} onClick={() => navigate(`${game.id}`)}>
            <div className="game__card">
              <div className="game__cardContainer">
                <img src={game.thumbnail}></img>
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
                <b>Publisher:</b> {game.publisher}
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
