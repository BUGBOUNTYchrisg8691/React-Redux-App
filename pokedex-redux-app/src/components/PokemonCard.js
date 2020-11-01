import React, { useState, useEffect } from "react";
import Axios from "axios";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    Axios.get(props.url)
      .then((resp) => {
        setPokemon(resp.data);
      })
      .catch((err) => {
        debugger;
      });
  }, [props.url]);

  if (Object.keys(pokemon).length < 1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-container">
        <div className="pokemon-card-header">
          <h2>{props.poke.name}</h2>
          <div className="pokemon-card-header-img-outer-bg">
            <div className="pokemon-card-header-img-inner-bg">
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name}-front-view`}
              />
            </div>
          </div>
        </div>
        <div className="pokemon-card-body">
          <label>
            Types
            <ul>
              {pokemon.types.map((type) => {
                return <li key={type.type.name}>{type.type.name}</li>;
              })}
            </ul>
          </label>
          <label>
            Stats
            <ul>
              {pokemon.stats.map((stat) => {
                return (
                  <li key={stat.stat.name}>
                    {stat.base_stat} {stat.stat.name}
                  </li>
                );
              })}
            </ul>
          </label>
          <label>
            Abilities
            <ul>
              {pokemon.abilities.map((ability) => {
                return (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                );
              })}
            </ul>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
