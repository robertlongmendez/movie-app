import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Movie } from './movie.model';

@Injectable({providedIn: 'root'})
export class MovieService {
  moviesChanged = new Subject<Movie[]>()
  sub: Subscription

  // private movies: Movie[] = [
  //   new Movie(
  //      'Attack of the Killer Tomatoes',
  //     'Aaargh!...',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvQEBxBu-xAvpeHP6Srio3VI2iXj26vLC5BnM8qGETOezQ4ergsY60jlpWpn56XI8sTQ&usqp=CAU',
  //     '1989'),
  //   new Movie(
  //     'Arcade',
  //     'The game wants to play with you.',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nUdtA3UVAPClm30Jz2TPzNVrijb6wrpiF0ciY5NJ3QEqbwmPcwRma0_xzBTpxIzBOiY&usqp=CAU',
  //     '1989'),
  //   new Movie(
  //     'The Giant Gila Monster',
  //     'Pretty Straight Forward',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLsLW26rNqWteyo7fIdRfB7-IuGvzXbLnF1zkQ5S1IcDoDrB2HWgyHedrah7vYHqWsQ8&usqp=CAU',
  //     '1989' )
  // ];
  private movies: Movie[] = [];

  constructor(private http: HttpClient) {}



  setMovies(movies: Movie[]) {
    this.movies = movies;
    this.moviesChanged.next(this.movies.slice());
  }

  getMovies() {

    return this.movies.slice();
  }

  getMovie(index: number) {
    return this.movies[index];
  }

  // addMoviesToSeenList(facts: Facts) {
  //   this.slService.addFact(facts);
  // }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  storeMovies() {
    // const movies = this.movieService.getMovies();
    return this.http.put('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json',
    this.movies)
    .subscribe(response =>
    {
      console.log(response);
    });
  }

  fetchMovies() {
    this.http.get<Movie[]>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json')

    .subscribe(movies => {
      this.setMovies(movies)
      console.log(movies);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // rateMovie(movie: Movie) {}
}
