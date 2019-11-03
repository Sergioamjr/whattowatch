import React from "react";
import Head from "next/head";

const HeadComponent: React.FC<{}> = () => {
  return (
    <Head>
      <title>WhatToWatch?</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  );
};

export default HeadComponent;
