import styled from "styled-components";
import { GridUL } from "../../styles";

export const MBottom30 = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesLists = styled(GridUL)`
  justify-content: normal;
  flex-wrap: wrap;
`;

interface CategoriesItemType {
  selected: boolean;
}

export const CategoriesItem = styled.li`
  a {
    display: block;
    margin-bottom: 15px;
    border: 1px solid #b62d54;
    padding: 5px;
    text-decoration: none;
    margin-right: 10px;
    color: ${(props: CategoriesItemType) =>
      props.selected ? "#fff" : "#b62d54"};
    font-size: 14px;
    white-space: pre;
    background: ${(props: CategoriesItemType) =>
      props.selected ? "#b62d54" : ""};
  }
`;
