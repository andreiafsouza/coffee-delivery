import styled from "styled-components";

interface IconContainerProps {
  color?: string;
}

export const Container = styled.main`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 1rem;
  gap: 2rem;
  display: grid;

  @media (min-width: 60em) {
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    padding: 0 2rem;
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 60em) {
    justify-content: flex-end;
  }
`;

export const OrderInfoContainer = styled.div`
  margin-top: 5rem;
`;

export const TextContainer = styled.div``;

export const OrderTitle = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.brand.yellowDark};
  font-size: ${(props) => props.theme.fontSize[32]};
  font-weight: 800;
  line-height: 130%;

  padding-bottom: 0.25rem;
`;

export const OrderSubtitle = styled.div`
  color: ${(props) => props.theme.base.subtitle};
  font-size: ${(props) => props.theme.fontSize[20]};
`;

export const OrderInfoOuter = styled.div`
  max-width: 32.875rem;
  margin-top: 2.5rem;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
    102.89deg,
    ${(props) => props.theme.brand.yellow} 2.61%,
    ${(props) => props.theme.brand.yellow} 98.76%
  );
`;
export const OrderInfoInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.base.background};
`;

export const TextInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  background: ${(props) => (props.color ? props.color : props.theme.base.text)};

  svg {
    flex-shrink: 0;
  }
`;

const TextInfoBase = styled.div`
  span {
    font-weight: 700;
  }
`;

export const TextInfo = styled(TextInfoBase)``;

export const TextInfoBold = styled(TextInfoBase)`
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 60em) {
    justify-content: flex-end;
  }
`;
