import React from "react";
import Layout from "../../components/Layout/Layout";
import { fetchCustomData, fetchMoviesGenres } from "../../services";
import GenrerList from "../../components/GenrerList/GenrerList";
import { Grid, Row } from "../../styles";
import ShowItem from "../../components/ShowItem/ShowItem";

const Genrer = props => {
  const [movies, setMovies] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { id } = props;
        const genres = await fetchMoviesGenres();
        const { results } = await fetchCustomData(
          "3/discover/movie",
          `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        );
        setGenres(genres);
        setMovies(results);
      } catch (error) {}
    };
    fetch();
  }, []);

  return (
    <Layout>
      <div className="hero">
        <h1 className="title" data-testid="title">
          Genresr
        </h1>
        <GenrerList genres={genres} />
        <Grid>
          {movies.map((movie, index) => (
            <Row key={index} xs={12} sm={6} md={4} lg={3}>
              <ShowItem {...movie} />
            </Row>
          ))}
        </Grid>
        {movies.length === 0 && <p>Nenhum filme encontrado.</p>}
      </div>
    </Layout>
  );
};

Genrer.getInitialProps = router => {
  return { ...router.query };
};

export default Genrer;
