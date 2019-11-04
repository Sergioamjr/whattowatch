import React from "react";
import Layout from "../components/Layout/Layout";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";
import DynamicInfiniteScroll from "../components/InfiniteScroll";
import { H2 } from "../styles";
import { MoviesType } from "./../utils/types";

const Home: React.FC<{}> = () => {
  const [page, setPage] = React.useState<number>(1);
  const { genres } = React.useContext(AppContext);
  const [movies, setMovies] = React.useState<MoviesType[]>([]);

  const fetchMore = async () => {
    try {
      const newMovies = await fetchMovies(page);
      setMovies(movies.concat(newMovies));
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
          items={movies}
        />
      </div>
    </Layout>
  );
};

export default Home;
