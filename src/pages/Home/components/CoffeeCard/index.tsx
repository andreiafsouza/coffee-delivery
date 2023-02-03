import * as S from "./styles";

import americano from "../../../../assets/cafe-americano.png";

import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { QuantitySelect } from "../../../../components/QuantitySelect";

export const CoffeeCard = () => {
  const theme = useTheme();

  const coffeeTypeTag = [
    "Tradicional",
    "Com Leite",
    "Especial",
    "Alcólico",
    "Gelado",
  ];

  return (
    <S.CoffeeListContainer>
      <S.CoffeeCardContainer>
        <S.ImageContainer>
          <S.CoffeeCardImage src={americano} alt="a cup of american coffee" />
        </S.ImageContainer>
        <S.CoffeeCardContent>
          <S.Content>
            <S.CoffeeTypeTagContainer>
              <S.CoffeeTypeTag>{coffeeTypeTag[0]}</S.CoffeeTypeTag>
            </S.CoffeeTypeTagContainer>
            <S.CoffeeTitle>Expresso Tradicional</S.CoffeeTitle>
            <S.CoffeeDescription>
              O tradicional café feito com água quente e grãos moídos
            </S.CoffeeDescription>
            <S.ActionContainer>
              <S.CoffePrice>
                <span>R$</span> 9,90
              </S.CoffePrice>
              <QuantitySelect />
              <S.ShoppingCartAdd>
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
