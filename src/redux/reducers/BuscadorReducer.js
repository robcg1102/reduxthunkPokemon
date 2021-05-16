import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "../actions/buscadorAction";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const buscador = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        pokemon: [],
        error: '',
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        error: '',
        pokemon: action.payload,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state
  }
};

export default buscador;