export interface Movie {
  original_title: string,
  title: string,
  release_date: string,
  adult: boolean,
  overview: string,
  vote_average: number,
  vote_count: number,
  poster_path: string | null,
  id: number,
}
