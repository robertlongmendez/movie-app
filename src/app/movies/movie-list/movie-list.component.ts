import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  subscription: Subscription;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged
    .subscribe(
      (movies: Movie[]) => {

        this.movies = movies;
      }
    );
this.movies = this.movieService.getMovies();



  }

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onMovieFeed() {
    this.router.navigate(['movie-feed'], {relativeTo: this.route});
  }

  onSaveData() {
    this.movieService.storeMovies();

  }

  onFetchData() {
    this.movieService.fetchMovies();
  }

  // ngOnDestroy() {
  //   this.movieService.unsubscribe();
  // }
}
