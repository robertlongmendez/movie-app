import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private movieService: MovieService) {}

    storeMovies() {
      const movies = this.movieService.getMovies();
      return this.http.put<{ name: string }>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json',
      movies)
      .subscribe(response =>
      {
        console.log(response);
      });
    }

    fetchMovies() {
      return this.http.get<any>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json')
      // .pipe(
      //   map(responseData => {
      //   const moviesArray: Movie[] = [];
      //   for (const key in responseData) {
      //     if (responseData.hasOwnProperty(key)) {
      //       moviesArray.push({ ...responseData[key], id: key })
      //     }
      //   }
      //   return moviesArray;
      // })
      // )
      .subscribe(movies => {
        console.log(movies);
        // this.movieService.setMovies(movies);
      });
    }

}
