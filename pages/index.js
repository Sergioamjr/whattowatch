import React from "react";

import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";
import DynamicInfiniteScroll from "../components/InfiniteScroll";

const H1 = styled.h1`
  margin-bottom: 30px;
`;

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { genres } = React.useContext(AppContext);
  const [movies_, setMovies_] = React.useState([]);

  const fetchMore = async f => {
    try {
      const newMovies = await fetchMovies(page);
      setMovies_(movies_.concat(newMovies));
      setPage(page + 1);
    } catch (error) {}
  };

  return (
    <Layout>
      <div>
        <H1 className="title" data-testid="title">
          Lasts movies
        </H1>
        <GenrerList genres={genres} />
        <DynamicInfiniteScroll
          config={{
            loadMore: fetchMore,
            hasMore: page < 499
          }}
          items={movies_.sort((a, b) => {
            if (a.popularity > b.popularity) {
              return -1;
            }
            if (a.popularity < b.popularity) {
              return 1;
            }
            return 0;
          })}
        />
      </div>
    </Layout>
  );
};

export default Home;
