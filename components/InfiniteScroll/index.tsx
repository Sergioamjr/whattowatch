import React from "react";
import styled from "styled-components";
import InfiniteScroll_ from "react-infinite-scroller";
import * as Style from "../../styles";
import ShowItem from "../ShowItem/ShowItem";
import { MoviesType } from "./../../pages/recommendation";

const ScrollWraper = styled(InfiniteScroll_)`
  flex-wrap: wrap;
  margin: 0 -15px;
  display: flex;
  justify-content: space-between;
`;

interface DynamicInfiniteScrollTypes {
  items: MoviesType[];
  config: {
    loadMore: () => void;
    hasMore: boolean;
  };
}

const DynamicInfiniteScroll: React.FC<DynamicInfiniteScrollTypes> = props => {
  return (
    <div style={{ height: 700, overflow: "auto" }}>
      <ScrollWraper
        loader={<div key={0}>Lading ...</div>}
        useWindow={false}
        pageStart={0}
        {...props.config}
      >
        {props.items
          .sort((a, b) => {
            if (a.popularity > b.popularity) {
              return -1;
            }
            if (a.popularity < b.popularity) {
              return 1;
            }
            return 0;
          })
          .map((movie, index) => (
            <Style.Row key={index} xs={12} sm={4} md={3} lg={2}>
              <ShowItem {...movie} />
            </Style.Row>
          ))}
      </ScrollWraper>
    </div>
  );
};

export default DynamicInfiniteScroll;
