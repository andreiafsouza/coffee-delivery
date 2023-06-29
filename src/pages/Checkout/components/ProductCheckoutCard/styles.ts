import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  padding-block: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.base.button};
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  flex-wrap: wrap;
`;

export const ImageContainer = styled.img`
  max-width: 4rem;
  max-height: 4rem;
`;

export const ProductInfo = styled.div`
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
