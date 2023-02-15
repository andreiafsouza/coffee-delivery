import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;

  width: 1.25rem;
  height: 1.25rem;

  background: ${(props) => props.theme.brand.yellowDark};
`;

export const Number = styled.div`
  color: ${(props) => props.theme.base.white};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize[12]};
  /* line-height: 130%; */
  text-align: center;
  letter-spacing: -0.06em;
`;
