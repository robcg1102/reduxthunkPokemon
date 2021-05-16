import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {
  const game_shop = useSelector((state) => state.game_shop);

  return <>Unidades: {game_shop.pokemon}</>;
};

export default CantidadPokemonHook;
