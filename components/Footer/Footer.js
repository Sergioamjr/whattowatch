import React from "react";
import { Container } from "../../styles";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo">
      <Container>
        <p>footer</p>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
