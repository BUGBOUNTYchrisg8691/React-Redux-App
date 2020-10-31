import Axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_DATA = "FETCH_DATA";
export const SET_POKE = "SET_POKE";

export function fetchData(arrOfPokemon) {
  return {
    type: FETCH_DATA,
    payload: arrOfPokemon,
  };
}

export function setPoke(pokemonObj) {
  return {
    type: SET_POKE,
    payload: pokemonObj,
  };
}
