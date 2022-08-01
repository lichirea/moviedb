import {Movie} from "./movie";

export interface Result {
  status_code: number;
  page: number,
  results: Movie[],
  total_results: number,
  total_pages: number,
}
