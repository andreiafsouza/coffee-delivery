import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;

  padding-block: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.base.button};
`;

export const CoffeInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ImageContainer = styled.img`
  max-width: 4rem;
  max-height: 4rem;
`;

export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.base.subtitle};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PriceTag = styled.div`
  font-weight: 700;
`;

/* QUANTITY SELECTOR */

export const SelectContainer = styled.div`
  max-width: 4.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.base.button};
  border-radius: 6px;

  padding: 0.53125rem 0.5rem;
  gap: 0.25rem;

  flex-shrink: 0;
`;

export const IconContainer = styled.button`
  transition: all 0.1s ease-in-out;
  border: none;
  background: none;

  svg {
    color: ${(props) => props.theme.brand.purple};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.1s ease-in-out;
      svg {
        color: ${(props) => props.theme.brand.purpleDark};
      }
    }
  }
`;

export const SelectCounter = styled.div`
  min-width: 1.25rem;
  min-height: 1.3125rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) => props.theme.base.title};
`;
