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
  selecteds: string[];
}

const defaultFilters = {
  year: 2019,
  selecteds: [""]
};

export interface MoviesType {
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

const Movies: React.FC<{}> = () => {
  const [movies, setmovies] = React.useState<MoviesType>(defaultSuggestion);
  const [filters, setFilters] = React.useState<filtersType>(defaultFilters);
  const [idsToRemove, setIdsToRemove] = React.useState<number[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [hasNoMoreSuggestion, setHasNoMoreSuggestion] = React.useState<boolean>(
    false
  );
  const { genres } = React.useContext(AppContext);

  const AddToSelectedsIds = (id: string) => {
    setIdsToRemove([]);
    setHasNoMoreSuggestion(false);
    setFilters({
      ...filters,
      selecteds: filters.selecteds.concat(id.toString())
    });
  };
  const RemoveFromSelectedsIds = (id: string) => {
    setIdsToRemove([]);
    setHasNoMoreSuggestion(false);
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

  const fetchMovies = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { results } = await fetchCustomData("3/discover/movie", {
        with_genres: filters.selecteds.join().replace(",", ""),
        primary_release_year: filters.year ? filters.year : "",
        page: Math.ceil(idsToRemove.length / 19) || 1
      });
      const resultsFiltered = results.filter(
        (result: MoviesType) => !idsToRemove.includes(result.id)
      );
      const key = generateRandonNumber(0, resultsFiltered.length - 1);
      setIdsToRemove(idsToRemove.concat(resultsFiltered[key].id));
      setmovies(resultsFiltered[key]);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      setHasNoMoreSuggestion(true);
      setmovies(defaultSuggestion);
    }
  };

  const img = _get(movies, "poster_path");
  return (
    <Layout>
      <div className="hero">
        <Style.H2>Select the genres that you're interested:</Style.H2>
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
                    <Style.Form.Label noMargin inline htmlFor={id}>
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
                <Style.Button
                  disabled={isFetching || hasNoMoreSuggestion}
                  onClick={fetchMovies}
                >
                  Search
                </Style.Button>
              </Style.Form.InputWrapper>
            </form>
          </Style.Row>
          {hasNoMoreSuggestion && (
            <Style.Row sm={8}>
              <p>No more results. Please, reset the genres filters.</p>
            </Style.Row>
          )}
          {!hasNoMoreSuggestion && (
            <Style.Row sm={4}>
              {isFetching && <Loading />}
              {!isFetching && img && (
                <img
                  alt="Filme"
                  src={`https://image.tmdb.org/t/p/w500/${img}`}
                />
              )}
            </Style.Row>
          )}
          {!hasNoMoreSuggestion && (
            <Style.Row sm={4}>
              {!isFetching && movies.title && <SuggestionInfo {...movies} />}
            </Style.Row>
          )}
        </Style.Grid>
      </div>
    </Layout>
  );
};

export default Movies;
