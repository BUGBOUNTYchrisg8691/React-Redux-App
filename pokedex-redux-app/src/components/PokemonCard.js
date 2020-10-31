import React, { useState, useEffect } from "react";
import Axios from "axios";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    Axios.get(props.url)
      .then((resp) => setPokemon(resp.data))
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-container">
        <div className="pokemon-card-header">
          <h2>{props.poke.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name}-front-view`}
          />
        </div>
        <div className="pokemon-card-body">
          <ul>
            {/*}{pokemon.stats.map((stat) => {
              return (
                <li>
                  {stat.base_stat} {stat.stat.name}
                </li>
              );
            })}*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
