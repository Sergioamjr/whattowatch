import React from "react";
import Layout from "../components/Layout/Layout";

const Movies: React.FC<{}> = () => (
  <Layout>
    <div className="hero">
      <h1 className="title" data-testid="title">
        Movies
      </h1>
    </div>
  </Layout>
);

export default Movies;
