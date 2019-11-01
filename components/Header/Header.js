import React from "react";
import { Header, Grid, GridUL, A } from "./styles";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "../../styles";

const MLeft10 = styled(A)`
  margin-left: 10px;
  font-size: 1rem;
  color: #333;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  color: #333;
`;

const HeaderComponent = props => {
  return (
    <Header role="banner">
      <Container>
        <Grid>
          <H1>Suggest me something</H1>
          <nav>
            <GridUL>
              <li>
                <Link href="/">
                  <MLeft10>Home</MLeft10>
                </Link>
              </li>

              <li>
                <Link href="/recommendation">
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
