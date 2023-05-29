import * as S from "./styles";

import { Plus, Minus } from "phosphor-react";

import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { QuantitySelect } from "../../../../components/QuantitySelect";

import { CoffeeType } from "../../../../context/CoffeesProvider";
import {
  ReducerAction,
  ReducerActionType,
} from "../../../../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  coffee: CoffeeType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const CoffeeCard = ({
  coffee,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType): ReactElement => {
  const theme = useTheme();

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const onAddToCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...coffee, quantity: 1 },
    });

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: { ...coffee, quantity: 1 },
    });

  return (
    <S.CoffeeListContainer>
      <S.CoffeeCardContainer>
        <S.ImageContainer>
          <S.CoffeeCardImage src={img} alt={`a cup of ${coffee.name}`} />
        </S.ImageContainer>
        <S.CoffeeCardContent>
          <S.Content>
            <S.CoffeeTypeTagContainer>
              <S.CoffeeTypeTag>{coffee.type}</S.CoffeeTypeTag>
            </S.CoffeeTypeTagContainer>
            <S.CoffeeTitle>{coffee.name}</S.CoffeeTitle>
            <S.CoffeeDescription>{coffee.description}</S.CoffeeDescription>
            <S.ActionContainer>
              <S.CoffePrice>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(coffee.price)}
              </S.CoffePrice>
              <S.SelectContainer>
                <S.IconContainer onClick={onRemoveFromCart}>
                  <Minus size={14} weight="bold" />
                </S.IconContainer>
                <S.SelectCounter>{coffee.quantity}</S.SelectCounter>
                <S.IconContainer onClick={onAddToCart}>
                  <Plus size={14} weight="bold" />
                </S.IconContainer>
              </S.SelectContainer>
              <S.ShoppingCartAdd onClick={onAddToCart}>
                <ShoppingCart
                  size={22}
                  weight="fill"
                  color={theme.base.white}
                />
              </S.ShoppingCartAdd>
            </S.ActionContainer>
          </S.Content>
        </S.CoffeeCardContent>
      </S.CoffeeCardContainer>
    </S.CoffeeListContainer>
  );
};

export default CoffeeCard;
