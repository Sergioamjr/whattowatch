import React from "react";
import { Header, Grid, GridUL, A } from "./styles";
import PropTypes from "prop-types";
import Link from "next/link";
import { Container } from "../../styles";

const HeaderComponent = props => {
  return (
    <Header role="banner">
      <Container>
        <Grid>
          <h1>MovieMmendation</h1>
          <nav>
            <GridUL>
              <li>
                <Link href="/">
                  <A
                    onClick={e => {
                      console.log(props);
                      console.log("click");
                      props.setInProp && props.setInProp();
                    }}
                  >
                    Home
                  </A>
                </Link>
              </li>
              <li>
                <Link href="/movies">
                  <A
                    onClick={e => {
                      props.setInProp && props.setInProp();
                    }}
                  >
                    Movies
                  </A>
                </Link>
              </li>
            </GridUL>
          </nav>
        </Grid>
      </Container>
    </Header>
  );
};

HeaderComponent.propTypes = {
  setInProp: PropTypes.func
};

export default HeaderComponent;
