import React from "react";
import { connect } from "react-redux";

import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  return (
    <div className="pokemon-list-container">
      {props.pokemon.map((poke) => {
        return <PokemonCard key={poke.id} url={poke.url} poke={poke} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

export default connect(mapStateToProps, {})(PokemonList);
