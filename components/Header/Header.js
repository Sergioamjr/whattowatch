import React from "react";
import { useRouter } from "next/router";
import { Header, Grid, GridUL, A } from "./styles";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "../../styles";

const MLeft10 = styled(A)`
  margin-left: 10px;
  font-size: 1rem;
  color: #46a57a;
  border-bottom: 1px solid;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  color: #46a57a;
  span {
    color: #fff;
    background: #46a57a;
  }
`;

const HeaderComponent = props => {
  const { route } = useRouter();
  return (
    <Header role="banner">
      <Container>
        <Grid>
          <H1>
            WhatTo<span>Watch</span>?
          </H1>
          <nav>
            <GridUL>
              <li>
                {route !== "/recommendation" ? (
                  <Link href="/recommendation">
                    <MLeft10>Suggestion</MLeft10>
                  </Link>
                ) : (
                  <Link href="/">
                    <MLeft10>Home</MLeft10>
                  </Link>
                )}
              </li>
            </GridUL>
          </nav>
        </Grid>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
