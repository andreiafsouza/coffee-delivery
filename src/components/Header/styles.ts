import styled from "styled-components";

export const HeaderContainer = styled.header`
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
