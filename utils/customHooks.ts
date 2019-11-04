import React from "react";
import { fetchMovies, fetchMoviesGenres, fetchCustomData } from "../services";
import { AppContext } from "../pages/_app";
import { MoviesType, GenresType } from "./types";

export const fetchMoviesHook = () => {
  const [isFetching, setFetching] = React.useState<boolean>(true);
  const [movies, setMovies] = React.useState<MoviesType[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const movies = await fetchMovies();
        setFetching(false);
        setMovies(movies);
      } catch (error) {
        setFetching(false);
        setMovies([]);
      }
    })();
  }, []);
  return {
    movies,
    isFetching
  };
};

export const fetchGenrersHook = () => {
  const [isFetching, setFetching] = React.useState<boolean>(true);
  const [genres, setGenres] = React.useState<GenresType[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const genres = await fetchMoviesGenres();
        setFetching(false);
        setGenres(genres);
      } catch (error) {
        setFetching(false);
        setGenres([]);
      }
    })();
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

export const returnGenrerName = (id: string) => {
  const { genres } = React.useContext(AppContext);
  const currentGenrer = genres.find(
    ({ id: _id }) => _id.toString() === id.toString()
  );
  return (currentGenrer && currentGenrer.name) || "";
};

export const fetchMovieByGenrerId = (id: string) => {
  const [movies, setMovies] = React.useState<MoviesType[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchCustomData("3/discover/movie", {
          with_genres: id,
          page: 1
        });
        setMovies(results);
      } catch (error) {
        setMovies([]);
      }
    })();
  }, []);
  return movies;
};

export const fetchAllMovies = (page: number) => {
  const [inProp, setInProp] = React.useState<boolean>(false);
  const [movies, setMovies] = React.useState<MoviesType[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const newMovies = await fetchMovies(page);
        setMovies(movies.concat(newMovies));
        setInProp(true);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setMovies(movies.concat([]));
        setInProp(true);
        setLoading(false);
      }
    })();
  }, [page]);
  return { inProp, movies, isLoading };
};
