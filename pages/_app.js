/* eslint-disable space-before-function-paren */
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import HeadComponent from "../components/Head/Head";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    list-style-type: none;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = () => {
    if (process.env.NODE_ENV !== "production") {
      const axe = require("react-axe");
      axe(React, ReactDOM, 1000);
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <HeadComponent />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
