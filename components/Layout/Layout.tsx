import React from "react";
import Header from "../Header/Header";
import { Container } from "../../styles";
import { LayoutWrapper } from "./styles";

const Layout: React.FC<{}> = props => {
  return (
    <React.Fragment>
      <Header {...props} />
      <LayoutWrapper>
        <Container>
          <main role="main">{props.children}</main>
        </Container>
      </LayoutWrapper>
    </React.Fragment>
  );
};

export default Layout;
