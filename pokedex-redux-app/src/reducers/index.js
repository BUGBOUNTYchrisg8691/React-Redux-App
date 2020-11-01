import {
  SETTING_PROMISES_START,
  SETTING_PROMISES_SUCCESS,
  SETTING_PROMISES_FAILURE,
  FETCHING_POKEMON_START,
  FETCHING_POKEMON_SUCCESS,
  FETCHING_POKEMON_FAILURE,
} from "../actions";

const initialState = {
  promises: [],
  pokemon: [],
  isFetching: false,
  error: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SETTING_PROMISES_START:
      return {
        ...state,
        isFetching: true,
      };
    case SETTING_PROMISES_SUCCESS:
      return {
        ...state,
        promises: [
          ...action.payload.map((pokemon) => {
            return pokemon.url;
          }),
        ],
        isFetching: false,
      };
    case SETTING_PROMISES_FAILURE:
      return {
        ...state,
        error: {
          ...state,
          errors: [...state.errors, action.payload],
        },
        isFetching: false,
      };
    case FETCHING_POKEMON_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: [...state.pokemon, action.payload],
        isFetching: false,
      };
    case FETCHING_POKEMON_FAILURE:
      return {
        ...state,
        errors: [...state.errors, action.payload],
        isFetching: false,
      };
    default:
      return state;
  }
}
