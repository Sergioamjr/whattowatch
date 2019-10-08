import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "../../styles";
import { LayoutWrapper } from "./styles";

const Layout = props => {
  return (
    <React.Fragment>
      <Header {...props} />
      <LayoutWrapper>
        <Container>
          <main role="main">{props.children}</main>
        </Container>
      </LayoutWrapper>
      <Footer footerName="Footers" />
    </React.Fragment>
  );
};

export default Layout;
