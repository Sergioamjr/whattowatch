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
  margin: ${props => (props.woMargin ? "0" : "0 -15px")};
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

export const Row = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  width: ${({ xs }) => (xs ? `${(xs / 12) * 100}%` : "100%")};
  @media screen and (min-width: 768px) {
    width: ${({ sm, xs }) =>
      sm ? `${(sm / 12) * 100}%` : xs ? `${(xs / 12) * 100}%` : "100%"};
  }
  @media screen and (min-width: 992px) {
    width: ${({ md, sm, xs }) =>
      md
        ? `${(md / 12) * 100}%`
        : sm
        ? `${(sm / 12) * 100}%`
        : xs
        ? `${(xs / 12) * 100}%`
        : "100%"};
  }
  @media screen and (min-width: 1200px) {
    width: ${({ lg, md, sm, xs }) =>
      lg
        ? `${(lg / 12) * 100}%`
        : md
        ? `${(md / 12) * 100}%`
        : sm
        ? `${(sm / 12) * 100}%`
        : xs
        ? `${(xs / 12) * 100}%`
        : "100%"};
  }
`;
