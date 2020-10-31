import { FETCH_DATA, SET_POKE } from "../actions";

const initialState = {
  pokemon: [],
  poke: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SET_POKE:
      return {
        ...state,
        poke: action.payload,
      };
    default:
      return state;
  }
};
