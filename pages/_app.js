/* eslint-disable space-before-function-paren */
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import HeadComponent from "../components/Head/Head";

import { createGlobalStyle } from "styled-components";
import { fetchMoviesGenres } from "../services";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    list-style-type: none;
  }
  img {
    max-width: 100%;
  }
`;

export const AppContext = React.createContext({ genres: [] });

class MyApp extends App {
  state = {
    genres: []
  };

  componentDidMount = async () => {
    if (process.env.NODE_ENV !== "production") {
      const axe = require("react-axe");
      axe(React, ReactDOM, 1000);
    }
    try {
      const genres = await fetchMoviesGenres();
      this.setState({ genres });
    } catch (error) {}
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <HeadComponent />
        <AppContext.Provider value={this.state}>
          <Component {...pageProps} />
        </AppContext.Provider>
      </>
    );
  }
}

export default MyApp;
