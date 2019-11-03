/* eslint-disable camelcase */
import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";
import trandingIcon from "./../../static/trending.svg";
import rankingIcon from "./../../static/podium.svg";
import genericImg from "./../../static/download.png";
import * as Style from "./style";

const transitionStyles = {
  entering: { opacity: 1, transform: "translateY(0px)" },
  entered: { opacity: 1, transform: "translateY(0px)" },
  exiting: { opacity: 0, transform: "translateY(-30px)" },
  exited: { opacity: 0, transform: "translateY(30px)" }
};

const defaultStyle = {
  transition: "all .5s ease",
  opacity: 1
};

const ShowItem = props => {
  const [inProp, setInProp] = React.useState(false);
  React.useEffect(() => {
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, 200);
  }, []);

  const { title, popularity, poster_path, vote_average } = props;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : genericImg;
  return (
    <Transition in={inProp} timeout={500}>
      {state => {
        return (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Style.Div className="show-item" data-test-id="test-example">
              <img alt={`${title} poster show`} src={imgUrl} />
              <Style.WrapperIcons>
                <Style.Icon icon={trandingIcon}>{popularity}</Style.Icon>
                <Style.Icon icon={rankingIcon}>{vote_average}</Style.Icon>
              </Style.WrapperIcons>
              <Style.P>{title}</Style.P>
            </Style.Div>
          </div>
        );
      }}
    </Transition>
  );
};

ShowItem.propTypes = {
  title: PropTypes.string,
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string
};

export default ShowItem;
