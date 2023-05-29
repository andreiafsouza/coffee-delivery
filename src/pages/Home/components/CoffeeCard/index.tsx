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
import { ReactElement, useState } from "react";

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
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);

  const img: string = new URL(
    `../../../../assets/${coffee.sku}.png`,
    import.meta.url
  ).href;

  const handleAddToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...coffee, quantity: coffeeQuantity },
    });
    setCoffeeQuantity(1);
  };

  const handleSubtractQuantity = () => {
    coffeeQuantity > 1 && setCoffeeQuantity(coffeeQuantity - 1);
  };

  const handleAddQuantity = () => {
    coffeeQuantity < 20 && setCoffeeQuantity(coffeeQuantity + 1);
  };

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
                <S.IconContainer onClick={handleSubtractQuantity}>
                  <Minus size={14} weight="bold" />
                </S.IconContainer>
                <S.SelectCounter>{coffeeQuantity}</S.SelectCounter>
                <S.IconContainer onClick={handleAddQuantity}>
                  <Plus size={14} weight="bold" />
                </S.IconContainer>
              </S.SelectContainer>
              <S.ShoppingCartAdd onClick={handleAddToCart}>
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
