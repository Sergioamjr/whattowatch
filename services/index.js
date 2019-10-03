import axios from "axios";
const key = "a1dc06d0f8d65b34ac156d07fe333060";
const formatResponse = response => {
  const {
    data: { results }
  } = response;
  return results;
};

export const fetchMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`
    )
    .then(formatResponse);
};
