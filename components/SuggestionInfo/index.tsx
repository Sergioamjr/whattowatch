import React from "react";
import * as Style from "./style";
import { MoviesType } from "./../../utils/types";
import { returnGenrerName } from "./../../utils/customHooks";

const SuggestionInfo: React.FC<MoviesType> = props => {
  return (
    <div>
      <Style.MBottom15>
        <Style.Title>Title:</Style.Title>
        <Style.Description>{props.title}</Style.Description>
      </Style.MBottom15>
      <Style.MBottom15>
        <Style.Title>Year:</Style.Title>
        <Style.Description>{props.release_date}</Style.Description>
      </Style.MBottom15>
      <Style.MBottom15>
        <Style.Title>Genre{props.genre_ids.length > 1 ? "s" : ""}:</Style.Title>
        <Style.Description>
          {props.genre_ids
            .map(id => `${returnGenrerName(id)}`)
            .join()
            .replace(/\,/g, ", ")}
        </Style.Description>
      </Style.MBottom15>
      <Style.MBottom15>
        <Style.Title>Popularity:</Style.Title>
        <Style.Description>{props.popularity}</Style.Description>
      </Style.MBottom15>
      <Style.MBottom15>
        <Style.Title>IMDB:</Style.Title>
        <Style.Description>{props.vote_average}</Style.Description>
      </Style.MBottom15>
      <Style.MBottom15>
        <Style.Title>Plot:</Style.Title>
        <Style.Description>{props.overview}</Style.Description>
      </Style.MBottom15>
    </div>
  );
};

export default SuggestionInfo;
