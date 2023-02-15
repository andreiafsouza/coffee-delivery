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
  padding-block: ${(props) => (props.navPadding ? "0.75rem" : "2rem")};
  padding-inline: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.2s ease-out;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  color: ${(props) => props.theme.brand.purpleDark};
  background: ${(props) => props.theme.brand.purpleLight};
  border-radius: 6px;
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
