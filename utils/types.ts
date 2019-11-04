export interface GenresType {
  id: string;
  name: string;
}

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
