import React, { useEffect, useState } from "react";
import { Logo } from "../Logo";
import * as S from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { Bradge } from "../Badge";

interface HeaderContainerProps {
  navPadding: boolean;
}

export const Header = () => {
  const theme = useTheme();
  const [navPadding, setNavpadding] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setNavpadding(true);
      } else {
        setNavpadding(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer navPadding={navPadding}>
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>
        <S.ActionsContainer>
          <S.LocationTag>
            <MapPin size={22} weight="fill" color={theme.brand.purple} />
            Porto Alegre, RS
          </S.LocationTag>
          <NavLink to="/checkout" title="Checkout">
            <S.ShoppingCartLink>
              <Bradge />
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme.brand.yellowDark}
              />
            </S.ShoppingCartLink>
          </NavLink>
        </S.ActionsContainer>
      </S.HeaderContainer>
    </S.Container>
  );
};
