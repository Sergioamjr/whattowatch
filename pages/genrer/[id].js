import React from "react";
import Layout from "../../components/Layout/Layout";
import PropTypes from "prop-types";
import GenrerList from "../../components/GenrerList/GenrerList";
import { Grid, Row } from "../../styles";
import ShowItem from "../../components/ShowItem/ShowItem";
import { AppContext } from "../_app";
import {
  returnGenrerName,
  fetchMovieByGenrerId
} from "../../utils/customHooks";

const Genrer = props => {
  const { id } = props;
  const { genres } = React.useContext(AppContext);
  const movies = fetchMovieByGenrerId(id);
  const name = returnGenrerName(id);

  return (
    <Layout>
      <div className="hero">
        {name && (
          <h1 className="title" data-testid="title">
            Genrer: {name}
          </h1>
        )}
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

Genrer.propTypes = {
  id: PropTypes.string
};

Genrer.getInitialProps = ({ query }) => {
  return query;
};

export default Genrer;
