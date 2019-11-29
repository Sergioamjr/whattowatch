import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import GenrerList from "../components/GenrerList/GenrerList";
import { AppContext } from "./_app";
import { fetchMovies } from "../services";
import DynamicInfiniteScroll from "../components/InfiniteScroll";
import { H2 } from "../styles";
import { MoviesType } from "./../utils/types";

interface Home {
  initialMovies: MoviesType[];
  initialPage: number;
}

const Home: NextPage<Home> = ({ initialMovies, initialPage }) => {
  const [page, setPage] = React.useState<number>(initialPage + 1);
  const { genres } = React.useContext(AppContext);
  const [movies, setMovies] = React.useState<MoviesType[]>(initialMovies);

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

Home.getInitialProps = async () => {
  const initialPage = 1;
  const initialMovies = await fetchMovies(initialPage);
  return { initialMovies, initialPage };
};

export default Home;
