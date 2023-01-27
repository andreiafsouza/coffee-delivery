import styled from "styled-components";
import background from "../../assets/background.png";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const IntroContainer = styled.div`
  width: 100%;
  min-height: 34rem;
  background: url(${background}) center center no-repeat;
  background-size: 100% 100%;
`;

export const IntroContent = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
`;

export const IntroLeftContent = styled.div``;

export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroTitle = styled.div`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.base.title};
  font-size: ${(props) => props.theme.fontSize[48]};
  font-weight: 800;
  line-height: 130%;
`;

export const IntroSubtitle = styled.div`
  font-size: ${(props) => props.theme.fontSize[20]};
  color: ${(props) => props.theme.base.subtitle};
  line-height: 130%;
`;

export const IntroItemContainer = styled.div``;

export const IntroItem = styled.div``;

export const IntroRightContent = styled.div`
  display: flex;
`;
