import React from "react";
import Layout from "../components/Layout/Layout";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";
import DynamicInfiniteScroll from "../components/InfiniteScroll";
import { H2 } from "../styles";

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
        <H2 className="title" data-testid="title">
          Select by genre:
        </H2>
        <GenrerList genres={genres} />
        <DynamicInfiniteScroll
          config={{
            loadMore: fetchMore,
            hasMore: page < 499
          }}
          items={movies_}
        />
      </div>
    </Layout>
  );
};

export default Home;
