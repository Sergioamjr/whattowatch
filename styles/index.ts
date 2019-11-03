import styled, { css } from "styled-components";
import UI from "./theme";
import * as Form from "./form";

export { Form };

export const DFlex = css`
  display: flex;
`;

export const JustifyBetween = css`
  justify-content: space-between;
`;

export const AlignCenter = css`
  align-items: center;
`;

export const FlexWrap = css`
  flex-wrap: wrap;
`;

export const ColorWhiteCSS = css`
  color: ${UI.color.white};
`;

export const ColorLightCSS = css`
  color: ${UI.color.light};
`;

export const BackgroundDarkThemeCSS = css`
  background: ${UI.color.darkTheme};
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
`;

export const PWhite = styled.p`
  color: ${UI.color.white};
`;

export const PLight = styled.p`
  color: ${UI.color.light};
`;

export const BackgroundDarkTheme = styled.div`
  background: ${UI.color.darkTheme};
`;

export const Grid = styled.div`
  ${DFlex}
  ${JustifyBetween}
  ${FlexWrap}
  margin: "0 -15px";
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
  color: #696969;
`;

export const Button = styled.button`
  border: 0;
  background: #b62d54;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  display: inline-block;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

interface RowType {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const Row = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  width: ${(props: RowType) =>
    props.xs ? `${(props.xs / 12) * 100}%` : "100%"};
  @media screen and (min-width: 768px) {
    width: ${({ sm, xs }) =>
      sm ? `${(sm / 12) * 100}%` : xs ? `${(xs / 12) * 100}%` : "100%"};
  }
  @media screen and (min-width: 992px) {
    width: ${(props: RowType) =>
      props.md
        ? `${(props.md / 12) * 100}%`
        : props.sm
        ? `${(props.sm / 12) * 100}%`
        : props.xs
        ? `${(props.xs / 12) * 100}%`
        : "100%"};
  }
  @media screen and (min-width: 1200px) {
    width: ${(props: RowType) =>
      props.lg
        ? `${(props.lg / 12) * 100}%`
        : props.md
        ? `${(props.md / 12) * 100}%`
        : props.sm
        ? `${(props.sm / 12) * 100}%`
        : props.xs
        ? `${(props.xs / 12) * 100}%`
        : "100%"};
  }
`;
