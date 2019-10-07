import React from "react";
import { fetchMovies, fetchMoviesGenres } from "../services";

export const fetchMoviesHook = () => {
  const [isFetching, setFetching] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const fetchMovies_ = async () => {
      const movies = await fetchMovies();
      setFetching(false);
      setMovies(movies);
    };
    fetchMovies_();
  }, []);
  return {
    movies,
    isFetching
  };
};

export const fetchGenrersHook = () => {
  const [isFetching, setFetching] = React.useState(true);
  const [genres, setGenres] = React.useState([]);
  React.useEffect(() => {
    const fetchMovies_ = async () => {
      const genres = await fetchMoviesGenres();
      setFetching(false);
      setGenres(genres);
    };
    fetchMovies_();
  }, []);
  return {
    genres,
    isFetching
  };
};

export const fetchMoviesAndGenresHook = () => {
  const { movies, isFetching } = fetchMoviesHook();
  const { genres, isFetching: isFetching_ } = fetchGenrersHook();

  return {
    movies,
    genres,
    isFetching: isFetching && isFetching_
  };
};
