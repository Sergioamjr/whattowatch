import React from "react";
import { Transition } from "react-transition-group";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { Grid, Row } from "../styles";
import ShowItem from "../components/ShowItem/ShowItem";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchAllMovies } from "../utils/customHooks";

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease`,
  opacity: 1
};

const transitionStyles = {
  entering: { opacity: 1, transform: "translateX(0px)" },
  entered: { opacity: 1, transform: "translateX(0px)" },
  exiting: { opacity: 0, transform: "translateX(-30px)" },
  exited: { opacity: 0, transform: "translateX(30px)" }
};

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const Home = () => {
  const { genres } = React.useContext(AppContext);
  const { inProp, movies } = fetchAllMovies();

  return (
    <Layout>
      <Transition in={inProp} timeout={500}>
        {state => {
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div>
                <H1 className="title" data-testid="title">
                  Lasts movies
                </H1>
                <GenrerList genres={genres} />

                <Grid>
                  {movies.map((movie, index) => (
                    <Row key={index} xs={12} sm={6} md={4} lg={3}>
                      <ShowItem {...movie} />
                    </Row>
                  ))}
                </Grid>
              </div>
            </div>
          );
        }}
      </Transition>
    </Layout>
  );
};

export default Home;
