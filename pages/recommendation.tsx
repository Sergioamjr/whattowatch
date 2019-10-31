import React from "react";
import _get from "lodash/get";
import Layout from "../components/Layout/Layout";
import { AppContext } from "./_app";
import { fetchCustomData } from "../services";
import Loading from "../components/Loading";
import * as Style from "../styles";
import { generateRandonNumber } from "./../utils";
import SuggestionInfo from "../components/SuggestionInfo";

interface filtersType {
  year: number;
  minRate: number;
  selecteds: string[];
}

const defaultFilters = {
  year: 2019,
  minRate: 0,
  selecteds: [""]
};

export interface SuggestionInfoTypes {
  popularity: number;
  vote_count: number;
  poster_path: string;
  id: number;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

const defaultSuggestion = {
  popularity: 0,
  vote_count: 0,
  poster_path: "",
  id: 0,
  backdrop_path: "",
  original_language: "",
  original_title: "",
  genre_ids: [0],
  title: "",
  vote_average: 0,
  overview: "",
  release_date: ""
};

const opts = [9, 8, 7, 6, 5, 4];

const Movies: React.FC<{}> = () => {
  const [recommendedMovie, setRecommendedMovie] = React.useState<
    SuggestionInfoTypes
  >(defaultSuggestion);
  const [filters, setFilters] = React.useState<filtersType>(defaultFilters);
  const [isFetching, setIsFetching] = React.useState(false);
  const { genres } = React.useContext(AppContext);

  const AddToSelectedsIds = (id: string) => {
    setFilters({
      ...filters,
      selecteds: filters.selecteds.concat(id.toString())
    });
  };
  const RemoveFromSelectedsIds = (id: string) => {
    setFilters({
      ...filters,
      selecteds: filters.selecteds.filter(
        ids => ids.toString() !== id.toString()
      )
    });
  };

  const onChangeMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name }
    } = event;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const fetchMovies = async () => {
    try {
      setIsFetching(true);
      const { results } = await fetchCustomData("3/discover/movie", {
        with_genres: filters.selecteds.join().replace(",", ""),
        primary_release_year: filters.year ? filters.year : "",
        "vote_average.gte": filters.minRate
      });
      const key = generateRandonNumber(0, results.length - 1);
      setRecommendedMovie(results[key]);
      setIsFetching(false);
    } catch (error) {}
  };

  const img = _get(recommendedMovie, "poster_path");

  console.log(JSON.stringify(recommendedMovie, null, 2));

  return (
    <Layout>
      <div className="hero">
        <h1 className="title" data-testid="title">
          Recomendation
        </h1>
        <p>Select the genres that you would like to watch:</p>
        <Style.Grid>
          <Style.Row sm={4}>
            <form>
              {genres.map(({ id, name }) => {
                return (
                  <Style.Form.InputWrapper inline key={id}>
                    <Style.Form.Input
                      inline
                      disabled={isFetching}
                      onChange={() =>
                        !(
                          filters.selecteds.filter(
                            id_ => id_.toString() === id.toString()
                          ).length > 0
                        )
                          ? AddToSelectedsIds(id.toString())
                          : RemoveFromSelectedsIds(id.toString())
                      }
                      checked={
                        filters.selecteds.filter(
                          id_ => id_.toString() === id.toString()
                        ).length > 0
                      }
                      id={id}
                      value={id.toString()}
                      type="checkbox"
                    />
                    <Style.Form.Label inline htmlFor={id}>
                      {name}
                    </Style.Form.Label>
                  </Style.Form.InputWrapper>
                );
              })}
              <Style.Form.InputWrapper>
                <Style.Form.Label>Year</Style.Form.Label>
                <Style.Form.Input
                  name="year"
                  type="number"
                  onChange={onChangeMovies}
                  value={filters.year}
                />
              </Style.Form.InputWrapper>
              <Style.Form.InputWrapper>
                <Style.Form.Label>Rate:</Style.Form.Label>
                <Style.Form.Select
                  name="minRate"
                  onChange={onChangeMovies}
                  value={filters.minRate}
                >
                  <option value={0}>Indiferente</option>
                  {opts.map(opt => (
                    <option value={opt} key={opt}>
                      min {opt}
                    </option>
                  ))}
                </Style.Form.Select>
              </Style.Form.InputWrapper>

              <Style.Button onClick={fetchMovies}>
                Look for recommendation
              </Style.Button>
            </form>
          </Style.Row>
          <Style.Row sm={4}>
            {isFetching && <Loading />}
            {!isFetching && img && (
              <img src={`https://image.tmdb.org/t/p/w500/${img}`} />
            )}
          </Style.Row>
          <Style.Row sm={4}>
            {!isFetching && recommendedMovie.title && (
              <SuggestionInfo {...recommendedMovie} />
            )}
          </Style.Row>
        </Style.Grid>
      </div>
    </Layout>
  );
};

export default Movies;
