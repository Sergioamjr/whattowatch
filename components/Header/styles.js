import styled from "styled-components";
// import UI from "./../../theme";
import {
  DFlex,
  JustifyBetween,
  ColorWhiteCSS,
  AlignCenter
} from "../../styles";

export const Header = styled.header`
  margin-top: 20px;
  padding: 10px 0;
`;

export const Grid = styled.div`
  ${DFlex}
  ${JustifyBetween}
  ${AlignCenter}
  height: 100%
`;

export const GridUL = styled.ul`
  ${DFlex}
  ${JustifyBetween}
`;

export const A = styled.a`
  cursor: pointer;
  ${ColorWhiteCSS}
`;

export const H2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: lighter;
`;
