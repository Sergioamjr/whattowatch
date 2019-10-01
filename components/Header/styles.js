import styled from "styled-components";
import UI from "./../../theme";
import {
  DFlex,
  JustifyBetween,
  ColorWhiteCSS,
  AlignCenter
} from "../../styles";

export const Header = styled.header`
  background-color: ${UI.color.theme};
  color: #fff;
  height: 70px;
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
