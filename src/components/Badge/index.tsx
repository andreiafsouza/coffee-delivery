import * as S from "./styles";
import useCart from "../../hooks/useCart";

export const Badge = () => {
  const { totalItems, cart } = useCart();
  return (
    <S.Container>
      <S.Number>{totalItems}</S.Number>
    </S.Container>
  );
};
