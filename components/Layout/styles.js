import { BackgroundDarkThemeCSS } from "../../styles";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  ${BackgroundDarkThemeCSS}
  height: calc(100vh - 60px);
  padding-top: 40px;
  overflow: scroll;
`;
