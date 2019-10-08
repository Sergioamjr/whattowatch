import * as React from "react";
import { Container } from "../../styles";
import { FooterWrapper } from "./styles";

interface Props {
  footerName: string;
}

const Footer: React.FC<Props> = props => {
  return (
    <FooterWrapper role="contentinfo">
      <Container>
        <p>{props.footerName}</p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
