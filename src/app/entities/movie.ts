export interface Movie {
  original_title: string,
  release_date: string,
  adult: boolean,
  overview: string,
  vote_average: number,
  vote_count: number,
  genre_id: number,
  poster_path: string | null,
}
