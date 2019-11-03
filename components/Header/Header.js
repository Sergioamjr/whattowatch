import React from "react";
import { useRouter } from "next/router";
import { Header, MLeft10, H1 } from "./styles";
import Link from "next/link";
import { Container, GridUL, Grid } from "../../styles";

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
