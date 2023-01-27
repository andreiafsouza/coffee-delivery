import React from "react";
import { Logo } from "../Logo";
import * as S from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";

export const Header = () => {
  const theme = useTheme();
  return (
    <S.HeaderContainer>
      <Logo />
      <S.ActionsContainer>
        <S.LocationTag>
          <MapPin size={22} weight="fill" color={theme.brand.purple} />
          Porto Alegre, RS
        </S.LocationTag>
        <S.ShoppingCartLink>
          <ShoppingCart
            size={22}
            weight="fill"
            color={theme.brand.yellowDark}
          />
        </S.ShoppingCartLink>
      </S.ActionsContainer>
    </S.HeaderContainer>
  );
};
