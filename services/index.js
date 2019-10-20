import axios from "axios";
const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";
const formatResponse = response => {
  const {
    data: { results }
  } = response;
  return results;
};

export const fetchMovies = page => {
  return axios
    .get(
      `${baseURL}/3/discover/movie?include_adult=false&api_key=${key}&page=${page}`
    )
    .then(formatResponse);
};

export const fetchMoviesGenres = () => {
  return axios
    .get(`${baseURL}/3/genre/movie/list?api_key=${key}`)
    .then(({ data: { genres } }) => genres);
};

// https://api.themoviedb.org/3/discover/movie?api_key=a1dc06d0f8d65b34ac156d07fe333060&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80
export const fetchCustomData = (url, params) => {
  return axios
    .get(`${baseURL}/${url}?api_key=${key}${params}`)
    .then(({ data }) => data);
};
