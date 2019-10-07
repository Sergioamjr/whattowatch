import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Link from "next/link";
import { Grid, Row } from "../styles";
import { fetchMovies, fetchMoviesGenres } from "../services";
import ShowItem from "../components/ShowItem/ShowItem";
import { GridUL } from "../components/Header/styles";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const MBottom30 = styled.div`
  margin-bottom: 30px;
`;

const CategoriesLists = styled(GridUL)`
  justify-content: normal;
  overflow: scroll;
  padding-bottom: 30px;
`;

const CategoriesItem = styled.li`
  a {
    display: block;
    background: #b62d54;
    padding: 5px;
    border-radius: 3px;
    text-decoration: none;
    margin-right: 10px;
    color: #fff;
    white-space: pre;
  }
`;

const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {
    setMovies(movies);
    const fetchMovies_ = async () => {
      const movies = await fetchMovies();
      const genres = await fetchMoviesGenres();
      setGenres(genres);
      setMovies(movies);
    };
    fetchMovies_();
  }, []);

  return (
    <Layout>
      <div>
        <H1 className="title" data-testid="title">
          Lasts movies
        </H1>
        {genres.length > 0 && (
          <MBottom30>
            <p>Genres</p>
            <CategoriesLists>
              {genres.map(({ id, name }) => (
                <CategoriesItem key={id}>
                  <Link href={`/genrer/${id}`}>{name}</Link>
                </CategoriesItem>
              ))}
            </CategoriesLists>
          </MBottom30>
        )}
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
