import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  background: ${(props) => props.theme.base.background};
        
    /* Webkit */
    ::-webkit-scrollbar {
      width: 8px;
      background-color: ${(props) => props.theme.base.card};
    }
        
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${(props) => props.theme.base.label};
    }
        
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: 
    ${(props) => props.theme.base.label} ${(props) => props.theme.base.card};
        
    /* Internet Explorer */
    scrollbar-base-color: ${(props) => props.theme.base.card};
    scrollbar-3dlight-color: ${(props) => props.theme.base.card};
    scrollbar-darkshadow-color: ${(props) => props.theme.base.card};
    scrollbar-highlight-color: ${(props) => props.theme.base.card};
    scrollbar-shadow-color: ${(props) => props.theme.base.card};
    scrollbar-arrow-color: ${(props) => props.theme.base.label};
  }

  :focus {
    outline: 0;
   /*  box-shadow: 0 0 0 2px ${(props) => props.theme.brand.yellow}; */
  }

  body {
    color: ${(props) => props.theme.base.text};
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.fontSize[16]};
    line-height: 130%;

    overflow-y: scroll;
  }

  button {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.fontSize[16]};
  }

  h1,
  h2,
  h3 {
    text-wrap: balance;
  } 

  img,
  picture,
  svg {
    max-width: 100%;
    display: block;
  }
`;
