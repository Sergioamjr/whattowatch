import React from "react";
import Layout from "../../components/Layout/Layout";
import { fetchCustomData } from "../../services";
import "isomorphic-fetch";

const Genrer = props => {
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { id } = props;
        const res = await fetchCustomData(
          "3/discover/movie",
          `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        );
        console.log("res", res);
      } catch (error) {}
    };
    fetch();
  });

  return (
    <Layout>
      <div className="hero">
        <h1 className="title" data-testid="title">
          Genresr
        </h1>
      </div>
    </Layout>
  );
};

Genrer.getInitialProps = router => {
  return { ...router.query };
};

export default Genrer;
