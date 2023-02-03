import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: grid;
`;

export const CoffeeCardContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const CoffeeCardImage = styled.img`
  min-width: 7.5rem;
`;

export const CoffeeCardContent = styled.div`
  min-height: 19.375rem;
  min-width: 16rem;

  margin-top: 1.25rem;
  padding-top: 7rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.base.card};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 13.5rem;
  margin: 0 auto;
`;

export const CoffeeTypeTagContainer = styled.div`
  min-height: 1.3125rem;
  margin-bottom: 1rem;
`;

export const CoffeeTypeTag = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.brand.yellowDark};
  background: ${(props) => props.theme.brand.yellowLight};
  font-size: ${(props) => props.theme.fontSize[10]};
  font-weight: 700;
  line-height: 100%;

  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`;

export const CoffeeTitle = styled.p`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.base.subtitle};
  font-size: ${(props) => props.theme.fontSize[20]};
  font-weight: 700;

  padding-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.p`
  text-align: center;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.0625rem;

  gap: 0.5rem;
`;

export const CoffePrice = styled.p`
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize[20]};
  font-family: ${(props) => props.theme.font.display};
  line-height: 130%;

  padding-right: 0.9375rem;

  span {
    font-weight: 400;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.fontSize[14]};
    line-height: 130%;
  }
`;

export const ShoppingCartAdd = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.brand.purpleDark};
  border-radius: 6px;
  border: none;
`;
