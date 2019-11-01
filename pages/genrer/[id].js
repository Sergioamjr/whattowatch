import React from "react";
import { useRouter } from "next/router";
import _get from "lodash/get";
import Layout from "../../components/Layout/Layout";
import GenrerList from "../../components/GenrerList/GenrerList";
import { AppContext } from "../_app";
import DynamicInfiniteScroll from "../../components/InfiniteScroll";
import { fetchCustomData } from "../../services";
import { H2 } from "../../components/Header/styles";

const Genrer = props => {
  const router = useRouter();
  const id = _get(router, "query.id");
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const { genres } = React.useContext(AppContext);

  React.useEffect(() => {
    setItems([]);
    setPage(1);
    setTotalPages(0);
    fetchMore();
  }, [id]);

  const fetchMore = async f => {
    try {
      const { results, total_pages: totalPages } = await fetchCustomData(
        "3/discover/movie",
        {
          with_genres: id,
          page
        }
      );
      setTotalPages(totalPages);
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

export default Genrer;
