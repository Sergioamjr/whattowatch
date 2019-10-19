/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import trandingIcon from "./../../static/trending.svg";
import rankingIcon from "./../../static/podium.svg";
import genericImg from "./../../static/download.png";

const Div = styled.div`
  margin-bottom: 40px;
  position: relative;
  margin-right: 20px;
  border: 1px solid #d4d4d4;
  padding-bottom: 10px;
  border-radius: 5px;
`;

const Icon = styled.div`
  position: relative;
  padding-left: 30px;
  display: flex;
  align-items: center;
  height: 30px;
  &:after {
    content: "";
    background-image: ${props => `url(${props.icon});`}
    width: 25px;
    height: 30px;
    display: block;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const WrapperIcons = styled.div`
  display: flex;
  margin: 5px 0 10px 0;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 10px;
  justify-content: space-around;
`;

const P = styled.p`
  text-align: center;
`;

const ShowItem = props => {
  const { title, popularity, poster_path, vote_average } = props;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : genericImg;
  return (
    <Div className="show-item" data-test-id="test-example">
      <img alt={`${title} poster show`} src={imgUrl} />
      <WrapperIcons>
        <Icon icon={trandingIcon}>{popularity}</Icon>
        <Icon icon={rankingIcon}>{vote_average}</Icon>
      </WrapperIcons>
      <P>{title}</P>
    </Div>
  );
};

ShowItem.propTypes = {
  title: PropTypes.string,
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string
};

export default ShowItem;
