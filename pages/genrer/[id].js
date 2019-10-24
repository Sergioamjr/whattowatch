import React from "react";
import { useRouter } from "next/router";
import _get from "lodash/get";
import Layout from "../../components/Layout/Layout";
import GenrerList from "../../components/GenrerList/GenrerList";
import { AppContext } from "../_app";
import { returnGenrerName } from "../../utils/customHooks";
import DynamicInfiniteScroll from "../../components/InfiniteScroll";
import { fetchCustomData } from "../../services";

const Genrer = props => {
  const router = useRouter();
  const id = _get(router, "query.id");
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const { genres } = React.useContext(AppContext);
  const name = returnGenrerName(id);

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
        {name && (
          <h1 className="title" data-testid="title">
            Genrer: {name}
          </h1>
        )}
        <GenrerList genres={genres} />
        <DynamicInfiniteScroll
          config={{ loadMore: fetchMore, hasMore: page < totalPages }}
          items={items}
        />
      </div>
    </Layout>
  );
};

export default Genrer;
