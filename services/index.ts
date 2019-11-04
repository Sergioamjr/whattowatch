import axios from "axios";
const key = process.env.NEXT_SERVER_API_KEY;
const baseURL = "https://api.themoviedb.org";
import { MoviesType } from "./../utils/types";

const formatResponse = (response: { data: { results: MoviesType[] } }) => {
  const {
    data: { results }
  } = response;
  return results;
};

export const fetchMovies = (page?: number) => {
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

interface ParamsType {
  with_genres?: string;
  primary_release_year?: string;
  page?: number;
}
export const fetchCustomData = (url: string, params: ParamsType) => {
  return axios
    .get(`${baseURL}/${url}`, {
      params: {
        api_key: key,
        ...params
      }
    })
    .then(({ data }) => data);
};
