import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MovieService } from "../movies/movie.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {


  constructor(private http: HttpClient, private movieService: MovieService) {}



    storeMovies() {
      const movies = this.movieService.getMovies();
      debugger
      return this.http.put('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json', movies).subscribe(response =>
      {
        console.log(response);
      });
    }

    fetchMovies() {
      return this.http.get<any>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json')
      .subscribe(movies => {
        this.movieService.setMovies(movies);
      });
    }

}
