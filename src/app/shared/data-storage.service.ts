// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { MovieService } from '../movies/movie.service';
// import { Movie } from '../movies/movie.model';

// @Injectable({providedIn: 'root'})
// export class DataStorageService {

//   constructor(private http: HttpClient, private movieService: MovieService) {}

//     storeMovies() {
//       const movies = this.movieService.getMovies();
//       return this.http.put('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json',
//       movies)
//       .subscribe(response =>
//       {
//         console.log(response);
//       });
//     }

//     fetchMovies() {
//       this.http.get<Movie[]>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json')

//       .subscribe(movies => {
//         this.movieService.setMovies(movies)
//         console.log(movies);
//       });
//     }

// }

