import React from "react";
import { Header, Grid, GridUL, A } from "./styles";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "../../styles";

const MLeft10 = styled(A)`
  margin-left: 10px;
`;

const HeaderComponent = props => {
  return (
    <Header role="banner">
      <Container>
        <Grid>
          <h1>MovieMmendation</h1>
          <nav>
            <GridUL>
              <li>
                <Link style={{ marginLeft: 10 }} href="/">
                  <MLeft10>Home</MLeft10>
                </Link>
              </li>
              <li>
                <Link style={{ marginLeft: 10 }} href="/movies">
                  <MLeft10>Movies</MLeft10>
                </Link>
              </li>
              <li>
                <Link style={{ marginLeft: 10 }} href="/recommendation">
                  <MLeft10>Recomendation</MLeft10>
                </Link>
              </li>
            </GridUL>
          </nav>
        </Grid>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
