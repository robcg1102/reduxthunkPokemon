import { combineReducers } from "redux";
import buscador from './BuscadorReducer';
import game_shop from "./gameShopReducer";

const rootReducers = combineReducers({
  buscador,
  game_shop,
});

export default rootReducers;
