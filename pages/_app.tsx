/* eslint-disable space-before-function-paren */
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import HeadComponent from "../components/Head/Head";
import { fetchMoviesGenres } from "../services";
import { GenresType } from "./../utils/types";
import { GlobalStyle } from "./../styles/globals";

interface State {
  genres: GenresType[];
}

export const AppContext = React.createContext<State>({ genres: [] });

class MyApp extends App<{}, State> {
  state: State = {
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
