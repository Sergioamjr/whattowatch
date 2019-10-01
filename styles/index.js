import styled, { css } from "styled-components";
import UI from "./../theme";

export const DFlex = css`
  display: flex;
`;

export const JustifyBetween = css`
  justify-content: space-between;
`;

export const AlignCenter = css`
  align-items: center;
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
