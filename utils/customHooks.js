import React from "react";
import { fetchMovies, fetchMoviesGenres, fetchCustomData } from "../services";
import { AppContext } from "../pages/_app";

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

export const returnGenrerName = id => {
  const { genres } = React.useContext(AppContext);
  const currentGenrer = genres.find(
    ({ id: _id }) => _id.toString() === id.toString()
  );
  return (currentGenrer && currentGenrer.name) || "";
};

export const fetchMovieByGenrerId = id => {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { results } = await fetchCustomData(
          "3/discover/movie",
          `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        );
        setMovies(results);
      } catch (error) {}
    };
    fetch();
  }, []);
  return movies;
};

export const fetchAllMovies = page => {
  const [inProp, setInProp] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const newMovies = await fetchMovies(page);
      setMovies(movies.concat(newMovies));
      setInProp(true);
      setLoading(false);
    })();
  }, [page]);
  return { inProp, movies, isLoading };
};
