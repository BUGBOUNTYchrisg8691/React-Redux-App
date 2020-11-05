import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../actions";

import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const pokemon = useSelector((state) => state.pokemon);
  const isFetching = useSelector((state) => state.isFetching);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <div className="pokemon-list-container">
      {isFetching ? <div>Loading Pokemon...</div> : null}
      {error ? <div>Error: {error}</div> : null}
      {pokemon.map((poke) => {
        return <PokemonCard key={poke.name} url={poke.url} poke={poke} />;
      })}
    </div>
  );
}

export default PokemonList;
