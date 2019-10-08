/* eslint-disable space-before-function-paren */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap"
            rel="stylesheet"
          ></link>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
