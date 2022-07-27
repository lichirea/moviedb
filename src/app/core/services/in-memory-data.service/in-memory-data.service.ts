import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const watchlist = [
      {
        original_title: 'Avatar',
        title: 'Avatar',
        release_date: '2009-12-10',
        adult: false,
        overview: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        vote_average: 7.5,
        vote_count: 25679,
        genre_id: [28, 12, 14, 878],
        poster_path:'/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg'
      }
    ];
    return {watchlist};
  }
  constructor() {
  }
}
