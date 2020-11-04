import Axios from "axios";

import { BASE_URL } from "../constants";

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE";

export const getPokemon = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_POKEMON_START });
    Axios.get(BASE_URL)
      .then((resp) => {
        dispatch({
          type: FETCHING_POKEMON_SUCCESS,
          payload: resp.data.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_POKEMON_FAILURE,
          //payload: JSON.stringify(err),
          payload: `error: ${err.message} - code: ${err.code}`,
        });
      });
  };
};
