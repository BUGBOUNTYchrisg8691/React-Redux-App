import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPokemon } from "../actions";

import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  useEffect(() => {
    props.getPokemon();
  });

  return (
    <div className="pokemon-list-container">
      {props.pokemon.map((poke) => {
        return <PokemonCard key={poke.name} url={poke.url} poke={poke} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
  };
}

export default connect(mapStateToProps, { getPokemon })(PokemonList);
