import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background:  ${(props) => props.theme.base.background};
  }

  body {
    color: ${(props) => props.theme.base.text};
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.fontSize[16]};
    line-height: 130%;
  }
`;
