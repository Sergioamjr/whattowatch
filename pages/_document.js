/* eslint-disable space-before-function-paren */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
