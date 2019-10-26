import React from "react";
import _get from "lodash/get";
import Layout from "../components/Layout/Layout";
import { AppContext } from "./_app";
import { fetchCustomData } from "../services";
import Loading from "../components/Loading";
import * as Style from "../styles";
import { generateRandonNumber } from "./../utils";

interface filtersType {
  year: number;
  minRate: number;
  minVotes: number;
  selecteds: string[];
}

const defaultFilters = {
  year: 2019,
  minRate: 0,
  minVotes: 0,
  selecteds: [""]
};

const opts = [9, 8, 7, 6, 5, 4];

const Movies: React.FC<{}> = () => {
  const [recommendedMovie, setRecommendedMovie] = React.useState({});
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

  const name = _get(recommendedMovie, "original_title");
  const img = _get(recommendedMovie, "poster_path");

  return (
    <Layout>
      <div className="hero">
        <h1 className="title" data-testid="title">
          Recomendation
        </h1>
        <p>Select the genres that you would like to watch:</p>
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
            <Style.Form.Label>Year</Style.Form.Label>
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
          <Style.Form.InputWrapper>
            <Style.Form.Label>Votes</Style.Form.Label>
            <Style.Form.Select
              name="minVotes"
              onChange={onChangeMovies}
              value={filters.minVotes}
            >
              <option value={0}>Indiferente</option>
              {opts.map(opt => (
                <option value={opt} key={opt}>
                  min {opt}
                </option>
              ))}
            </Style.Form.Select>
          </Style.Form.InputWrapper>
          <Style.Grid woMargin>
            <Style.Button onClick={fetchMovies}>
              Look for recommendation
            </Style.Button>
            <Style.Button onClick={fetchMovies}>Hide Filters</Style.Button>
          </Style.Grid>
        </form>
        {name && <p>{name}</p>}
        {img && <img src={`https://image.tmdb.org/t/p/w500/${img}`} />}
        {isFetching && <Loading />}
      </div>
    </Layout>
  );
};

export default Movies;
