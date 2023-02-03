import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.base.background};
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const ShoppingCartLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.brand.yellowLight};
  border-radius: 6px;
`;
