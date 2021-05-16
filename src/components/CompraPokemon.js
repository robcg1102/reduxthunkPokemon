import { connect } from "react-redux";

import {
  return_pokemon_action,
  buy_pokemon_action,
} from "../redux/actions/gameShopAction";

function CompraPokemon(props) {
  return (
    <div>
      <button
        className="btn btn-dark btn-sm mb-2 ml-3"
        onClick={() => {
          props.buy_pokemon_action(1);
        }}
      >
        Comprar Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm mb-1 ml-3"
        onClick={() => {
          props.return_pokemon_action(1);
        }}
      >
        Regresar Pokemon
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  return_pokemon_action,
  buy_pokemon_action,
};

export default connect(null, mapDispatchToProps)(CompraPokemon);
