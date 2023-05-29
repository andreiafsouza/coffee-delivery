import useCart from "../../../../hooks/useCart";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { Plus, Minus } from "phosphor-react";
import { useState } from "react";
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
  quantity: number;
};

export const CheckoutCoffeeCard = ({
  coffee,
  dispatch,
  REDUCER_ACTIONS,
  quantity,
}: PropsType) => {
  const theme = useTheme();

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const handleAddToCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...coffee, quantity: 1 },
    });

  const handleRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...coffee, quantity: 1 },
    });

  return (
    <S.Container>
      <S.CoffeInfoContainer>
        <S.ImageContainer src={img} alt={`a cup of ${coffee.name}`} />
        <S.CoffeInfo>
          <S.TextContainer>{coffee.name}</S.TextContainer>
          <S.ButtonContainer>
            <S.SelectContainer>
              <S.IconContainer onClick={handleRemoveFromCart}>
                <Minus size={14} weight="bold" />
              </S.IconContainer>
              <S.SelectCounter>{coffee.quantity}</S.SelectCounter>
              <S.IconContainer onClick={handleAddToCart}>
                <Plus size={14} weight="bold" />
              </S.IconContainer>
            </S.SelectContainer>
            <Button
              icon={<Trash size={16} color={theme.brand.purple} />}
              title={"Remover"}
              size={"small"}
            />
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
