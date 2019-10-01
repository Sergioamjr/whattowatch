/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { PLight } from "../../styles";
import styled from "styled-components";

const Div = styled.div`
  margin-bottom: 40px;
  position: relative;
  margin-right: 20px;
`;

const Score = styled.div`
  width: 40px;
  height: 40px;
  background: #2675bb;
  border-radius: 50%;
  position: absolute;
  right: -20px;
  top: -20px;
  color: #fff;
  text-align: center;
  line-height: 40px;
`;

const ShowItem = props => {
  const { title, popularity, poster_path } = props;
  return (
    <Div>
      <Score>{popularity.toFixed()}</Score>
      <img
        alt={`${title} poster show`}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <PLight>{title}</PLight>
    </Div>
  );
};

ShowItem.propTypes = {
  title: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string
};

export default ShowItem;
