import {Movie} from "./movie";

export interface Result {
  page: number,
  results: Movie[],
  total_results: number,
  total_pages: number,
}
