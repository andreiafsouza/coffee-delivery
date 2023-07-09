import styled from "styled-components";

interface HeaderContainerProps {
  navPadding: boolean;
}

export const Container = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.base.background};
  z-index: 1000;
`;

export const HeaderContainer = styled.header<HeaderContainerProps>`
  max-width: 74rem;
  margin: 0 auto;
  padding-block: ${(props) => (props.navPadding ? "1rem" : "2rem")};
  padding-inline: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.2s ease-out;

  @media (min-width: 55em) {
    padding-inline: 2rem;
  }
`;

export const LogoExtendedContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ActionsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationTag = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: none;
  color: ${(props) => props.theme.brand.yellowDark};
  background: ${(props) => props.theme.brand.yellowLight};
  border-radius: 6px;
  cursor: pointer;
`;

export const AdressText = styled.p`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
  }
`;

export const ShoppingCartLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.brand.yellowLight};
  border-radius: 6px;

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.1s ease-in-out;
      svg {
        fill: ${(props) => props.theme.brand.yellow};
      }
    }
  }
`;

export const DropdownLocation = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 3rem;
  right: 3rem;
  background: ${(props) => props.theme.base.button};
  opacity: 0;
  visibility: hidden;
  transition: 250ms ease;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.25rem;
  min-width: fit-content;

  &[aria-expanded="true"] {
    opacity: 1;
    visibility: visible;
    transition: 250ms ease;
  }

  &::before {
    content: "";
    position: absolute;
    top: -0.4rem;
    right: 1rem;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    background: ${(props) => props.theme.base.button};
    border-radius: 2px;
    transition: 250ms ease;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    &::before {
      right: 2.35rem;
    }
  }
`;

export const GeoLocationButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  white-space: nowrap;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 4px;
  color: ${(props) => props.theme.base.text};
  font-size: ${(props) => props.theme.fontSize[14]};

  svg {
    max-width: 24px;
    min-width: 24px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.1s ease-in-out;
      background-color: ${(props) => props.theme.base.hover};
    }
  }
`;
