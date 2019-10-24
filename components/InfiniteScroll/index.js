import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InfiniteScroll_ from "react-infinite-scroller";
import { Row } from "../../styles";
import ShowItem from "../ShowItem/ShowItem";

const ScrollWraper = styled(InfiniteScroll_)`
  flex-wrap: wrap;
  margin: 0 -15px;
  display: flex;
  justify-content: space-between;
`;

const DynamicInfiniteScroll = props => {
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
            <Row key={index} xs={12} sm={4} md={3} lg={2}>
              <ShowItem {...movie} />
            </Row>
          ))}
      </ScrollWraper>
    </div>
  );
};

DynamicInfiniteScroll.propTypes = {
  items: PropTypes.array.isRequired,
  config: PropTypes.object,
  hasMore: PropTypes.bool
};

export default DynamicInfiniteScroll;
