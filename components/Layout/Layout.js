import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <main role="main">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
