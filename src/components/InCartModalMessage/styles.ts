import styled, { keyframes } from "styled-components";

const opacityChange = keyframes`
0%{
    opacity: 0;
    transform: translateY(100%);
}5% {
    opacity: 1;
    transform: translateY(0%);
}90%{
    opacity: 1;
    transform: translateY(0%);
}100%{
    opacity: 0;
    transform: translateY(100%);
}
`;

export const InCartModalMessageContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.base.success};
  z-index: 9999;
  padding: 1rem;

  animation: ${opacityChange} 4s forwards ease-in-out;
`;

export const InCartMessage = styled.p`
  color: ${(props) => props.theme.base.white};
  font-size: ${(props) => props.theme.fontSize[20]};
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight[130]};
`;
