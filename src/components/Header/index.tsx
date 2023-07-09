import React, { ChangeEvent, useEffect, useState } from "react";
import { LogoExtended } from "../LogoExtended";
import * as S from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { Badge } from "../Badge";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { Logo } from "../Logo";

export const Header = () => {
  const theme = useTheme();
  const { geoLocation, getGeoLocation } = useGeoLocation();
  const [address, setAddess] = useState("Sua Localização");
  const [navPadding, setNavpadding] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenLocationMenu = () => {
    setOpenDropdown(true);
  };

  const handleCloseLocationMenu = () => {
    setOpenDropdown(false);
  };

  const handleGetGeoLocation = async () => {
    getGeoLocation();
  };

  useEffect(() => {
    if (geoLocation) {
      setAddess(`${geoLocation?.city}, ${geoLocation?.state}`);
    }
  }, [geoLocation]);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 1 ? setNavpadding(true) : setNavpadding(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer navPadding={navPadding}>
        <NavLink to="/" title="Express Coffee - Home">
          <S.LogoExtendedContainer>
            <LogoExtended />
          </S.LogoExtendedContainer>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
        </NavLink>
        <S.ActionsContainer>
          <S.LocationTag
            title={geoLocation ? address : "Sua Localização"}
            onMouseEnter={handleOpenLocationMenu}
            onMouseLeave={handleCloseLocationMenu}
          >
            <MapPin size={22} weight="fill" color={theme.brand.yellowDark} />
            <S.AdressText>{address}</S.AdressText>
          </S.LocationTag>
          <S.DropdownLocation
            title=""
            aria-expanded={openDropdown}
            onMouseEnter={handleOpenLocationMenu}
            onMouseLeave={handleCloseLocationMenu}
          >
            <S.GeoLocationButton onClick={handleGetGeoLocation}>
              <MapPin size={22} weight="fill" color={theme.base.subtitle} />
              Usar minha localização
            </S.GeoLocationButton>
          </S.DropdownLocation>
          <NavLink to="/checkout" title="Checkout">
            <S.ShoppingCartLink>
              <Badge />
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
