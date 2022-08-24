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

  function filterGames(filter) {
    switch (filter) {
      case "RELEASE_DATE_ASCENDING":
        return setGames(
          games
            .slice()
            .sort(
              (a,b) => 
                (a.release_date < b.release_date)
            )
        );
      case "RELEASE_DATE_DESCENDING":
        return setGames(
          games
            .slice()
            .sort(
              (a, b) => 
                (a.release_date > b.release_date)
            )
        );
      case "PLATFORM_PC":
        return setGames(
          games
            .slice()
            .sort(
              (a, b) => 
                (a.platform || b.platform == "PC")
            )
        );
        default:
        break;
    }
  }

  return (
    <div className='games'>
      <select
        id="filter"
        onChange={(event) => filterGames(event.target.value)}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Sort
        </option>
        <option value="RELEASE_DATE_ASCENDING">New to Old</option>
        <option value="RELEASE_DATE_DESCENDING">Old to New</option>
        <option value="PLATFORM_PC">PC</option>
        <option value="PLATFORM_WEB">Web Platform</option>
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
