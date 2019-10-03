import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { ColorLightCSS, Grid, Row } from "../styles";
import { getMovies } from "../services";
import ShowItem from "../components/ShowItem/ShowItem";

const H1 = styled.h1`
  ${ColorLightCSS}
`;

const Home = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);

  return (
    <Layout>
      <div>
        <H1 className="title" data-testid="title">
          Welcomes
        </H1>
        <Grid>
          {movies.map((movie, index) => (
            <Row key={index} xs={12} sm={6} md={4} lg={3}>
              <ShowItem {...movie} />
            </Row>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
