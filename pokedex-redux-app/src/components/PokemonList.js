import React, { useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";

import { setPromises, fetchPokemon } from "../actions";

import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  useEffect(() => {
    props.setPromises();
  });

  useEffect(() => {
    const proms = props.promises.map((prom) => Axios.get(prom));
    console.log(proms);
    //props.fetchPokemon(props.promises);
  }, [props.promises]);

  return (
    <div className="pokemon-list-container">
      {/*}{props.pokemon.map((poke) => {
        return <PokemonCard key={poke.name} url={poke.url} poke={poke} />;
      })}*/}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    promises: state.promises,
  };
}

export default connect(mapStateToProps, { setPromises, fetchPokemon })(
  PokemonList
);
