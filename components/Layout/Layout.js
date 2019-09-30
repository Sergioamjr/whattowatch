import React from "react";
import HeadCompoenent from "../Head/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = props => {
  return (
    <div>
      <HeadCompoenent />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
