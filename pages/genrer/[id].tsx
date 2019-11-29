import React from "react";
import { NextPage, NextPageContext } from "next";
import _get from "lodash/get";
import Layout from "../../components/Layout/Layout";
import GenrerList from "../../components/GenrerList/GenrerList";
import { AppContext } from "../_app";
import DynamicInfiniteScroll from "../../components/InfiniteScroll";
import { fetchCustomData } from "../../services";
import { H2 } from "../../styles";
import { MoviesType } from "./../../utils/types";

interface GenrerType {
  initialMovies: MoviesType[];
  totalPages: number;
  id: string;
}

const Genrer: NextPage<GenrerType> = ({ initialMovies, totalPages, id }) => {
  const [page, setPage] = React.useState<number>(1);
  const [items, setItems] = React.useState<MoviesType[]>([]);
  const { genres } = React.useContext(AppContext);

  React.useEffect(() => {
    setItems(initialMovies);
    setPage(2);
  }, [initialMovies]);

  const fetchMore = async () => {
    try {
      const { results } = await fetchCustomData("3/discover/movie", {
        with_genres: id,
        page
      });
      setItems(items.concat(results));
      setPage(page + 1);
    } catch (error) {}
  };

  return (
    <Layout>
      <div className="hero">
        <H2 className="title" data-testid="title">
          Select by genre:
        </H2>

        <GenrerList selected={id} genres={genres} />
        <DynamicInfiniteScroll
          config={{ loadMore: fetchMore, hasMore: page < totalPages }}
          items={items}
        />
      </div>
    </Layout>
  );
};

interface Context extends GenrerType, NextPageContext {}

Genrer.getInitialProps = async (ctx: Context) => {
  const id = ctx.query.id.toString();
  const {
    results: initialMovies,
    total_pages: totalPages
  } = await fetchCustomData("3/discover/movie", {
    with_genres: id,
    page: 1
  });
  return { initialMovies, totalPages, id };
};

export default Genrer;
