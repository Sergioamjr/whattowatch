import axios from "axios";
const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";
const formatResponse = response => {
  const {
    data: { results }
  } = response;
  return results;
};

export const fetchMovies = () => {
  return axios
    .get(`${baseURL}/3/discover/movie?sort_by=popularity.desc&api_key=${key}`)
    .then(formatResponse);
};

export const fetchMoviesGenres = () => {
  return axios
    .get(`${baseURL}/3/genre/movie/list?api_key=${key}&language=en-US`)
    .then(({ data: { genres } }) => genres);
};
