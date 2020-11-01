import Axios from "axios";

import { BASE_URL } from "../constants";

export const SETTING_PROMISES_START = "SETTING_PROMISES_START";
export const SETTING_PROMISES_SUCCESS = "SETTING_PROMISES_SUCCESS";
export const SETTING_PROMISES_FAILURE = "SETTING_PROMISES_FAILURE";
export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_POKEMON_FAILURE";

export const setPromises = () => (dispatch) => {
  dispatch({ type: SETTING_PROMISES_START });
  Axios.get(BASE_URL)
    .then((resp) => {
      dispatch({
        type: SETTING_PROMISES_SUCCESS,
        payload: resp.data.results,
      });
    })
    .catch((err) => {
      dispatch({
        type: SETTING_PROMISES_FAILURE,
        //payload: JSON.stringify(err),
        payload: `${err.response.message} code: ${err.response.code}`,
      });
      //debugger;
    });
};

export const fetchPokemon = (urls) => (dispatch) => {
  dispatch({ type: FETCHING_POKEMON_START });
  const promises = urls.map((url) => Axios.get(url));
  dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: promises });
};
