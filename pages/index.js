import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { PLight, ColorLightCSS } from "../styles";

const H1 = styled.h1`
  ${ColorLightCSS}
`;

const Home = () => (
  <Layout>
    <div>
      <H1 className="title">Welcomes </H1>
      <PLight className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </PLight>
    </div>
  </Layout>
);

export default Home;
