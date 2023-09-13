import styled from "styled-components";
import background from "../../assets/background.png";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const IntroContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.base.background};
  background-size: 100% 100%;
  display: flex;
  align-items: center;
`;

export const IntroContent = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 1rem 2rem 0 2rem;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 55em) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem 2rem 0 2rem;
  }
`;

export const IntroLeftContent = styled.div`
  padding-bottom: 4rem;

  @media (min-width: 55em) {
    padding-bottom: 2rem;
  }
`;

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const IntroTitle = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.base.title};
  font-size: ${(props) => props.theme.fontSize[48]};
  font-weight: 800;
  line-height: 130%;
  letter-spacing: -0.005em;
`;

export const IntroSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSize[20]};
  color: ${(props) => props.theme.base.subtitle};
  line-height: 130%;

  padding-bottom: 2rem;

  @media (min-width: 55em) {
    padding-bottom: 4rem;
  }
`;

export const IntroItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media (min-width: 55em) {
    justify-content: space-between;
  }
`;

export const IntroItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
`;

export const IntroItemIcon = styled.div`
  background: ${(props) =>
    props.color ? props.color : props.theme.brand.yellowDark};
  min-width: 2rem;
  min-height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`;

export const IntroRightContent = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 55em) {
    justify-content: flex-end;

    img {
      max-width: 29.75rem;
      max-height: 22.5rem;
    }
  }
`;

export const ProductListContainer = styled.div`
  max-width: 74rem;
  margin-inline: auto;
  margin-bottom: 9.8125rem;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem 2rem;

  @media (min-width: 55em) and (max-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem 2rem;
  }

  @media (min-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.25rem 2rem;
  }
`;

export const ProductListTitle = styled.h2`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.base.subtitle};
  font-size: ${(props) => props.theme.fontSize[32]};
  font-weight: 800;
  line-height: 130%;
  margin-top: 2rem;
  margin-bottom: 2.125rem;

  align-self: flex-start;
`;
