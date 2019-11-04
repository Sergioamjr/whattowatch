/* eslint-disable camelcase */
import React from "react";
import { Transition } from "react-transition-group";
import * as trandingIcon from "./../../static/trending.svg";
import * as rankingIcon from "./../../static/podium.svg";
import * as genericImg from "./../../static/download.png";
import * as Style from "./style";
import { MoviesType } from "./../../utils/types";
import { switchStyle } from "./utils";

const defaultStyle = {
  transition: "all .5s ease",
  opacity: 1
};

const ShowItem: React.FC<MoviesType> = props => {
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
      {(state: string) => {
        const newStyle = switchStyle(state);
        const style = {
          ...defaultStyle,
          ...newStyle
        };
        return (
          <div style={style}>
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

export default ShowItem;
