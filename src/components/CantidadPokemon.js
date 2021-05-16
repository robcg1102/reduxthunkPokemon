import { connect } from "react-redux";

function CantidadPokemon(props) {
  return <>Unidades: {props.game_shop.pokemon}</>;
}

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
