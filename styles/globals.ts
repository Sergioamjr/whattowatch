import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
    font-family: 'Noto Sans', sans-serif;
    list-style-type: none;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
`;
