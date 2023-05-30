import useCart from "../../../../hooks/useCart";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { Plus, Minus } from "phosphor-react";
import { useState, ChangeEvent } from "react";
import * as S from "./styles";
import { QuantitySelect } from "../../../../components/QuantitySelect";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import americano from "../../../../assets/cafe-americano.png";
import { Button } from "../../../../components/Button";

type PropsType = {
  coffee: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

export const CheckoutCoffeeCard = ({
  coffee,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType) => {
  const theme = useTheme();
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffee.quantity);

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const handleAddQuantity = () => {
    const newQuantity = coffeeQuantity + 1;
    setCoffeeQuantity(newQuantity);
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...coffee, quantity: newQuantity },
    });
  };

  const handleRemoveQuantity = () => {
    if (coffeeQuantity > 1) {
      const newQuantity = coffeeQuantity - 1;
      setCoffeeQuantity(newQuantity);
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...coffee, quantity: newQuantity },
      });
    }
  };

  const handleRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: coffee,
    });

  return (
    <S.Container>
      <S.CoffeInfoContainer>
        <S.ImageContainer src={img} alt={`a cup of ${coffee.name}`} />
        <S.CoffeInfo>
          <S.TextContainer>{coffee.name}</S.TextContainer>
          <S.ButtonContainer>
            <S.SelectContainer>
              <S.IconContainer onClick={handleRemoveQuantity}>
                <Minus size={14} weight="bold" />
              </S.IconContainer>
              <S.SelectCounter>{coffee.quantity}</S.SelectCounter>
              <S.IconContainer onClick={handleAddQuantity}>
                <Plus size={14} weight="bold" />
              </S.IconContainer>
            </S.SelectContainer>
            {/* <Button
              icon={<Trash size={16} color={theme.brand.purple} />}
              title={"Remover"}
              size={"small"}
              onClick={handleRemoveFromCart}
            /> */}
            <button onClick={handleRemoveFromCart}>REMOVER</button>
          </S.ButtonContainer>
        </S.CoffeInfo>
      </S.CoffeInfoContainer>
      <S.PriceTag>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(coffee.price)}
      </S.PriceTag>
    </S.Container>
  );
};
