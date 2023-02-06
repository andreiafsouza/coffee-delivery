import React from "react";
import * as S from "./styles";
import { QuantitySelect } from "../../../../components/QuantitySelect";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import americano from "../../../../assets/cafe-americano.png";
import { Button } from "../../../../components/Button";

interface Props {
  title: string;
  price: string;
}

export const CheckoutCoffeeCard = ({ title, price }: Props) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.CoffeInfoContainer>
        <S.ImageContainer src={americano} alt="a cup of american coffee" />
        <S.CoffeInfo>
          <S.TextContainer>{title}</S.TextContainer>
          <S.ButtonContainer>
            <QuantitySelect />
            <Button
              icon={<Trash size={16} color={theme.brand.purple} />}
              title={"Remover"}
              size={"small"}
            />
          </S.ButtonContainer>
        </S.CoffeInfo>
      </S.CoffeInfoContainer>
      <S.PriceTag>{price}</S.PriceTag>
    </S.Container>
  );
};
