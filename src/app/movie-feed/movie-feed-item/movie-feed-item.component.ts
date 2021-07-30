import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';
import { MovieService } from 'src/app/movies/movie.service';

@Component({
  selector: 'app-movie-feed-item',
  templateUrl: './movie-feed-item.component.html',
  styleUrls: ['./movie-feed-item.component.css']
})
export class MovieFeedItemComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() poster: string;
  @Input() date: string;


constructor(private movieService: MovieService) {}



onAddMovieToList() {
  const newMovie = new Movie(
    this.title['name'],
    this.content['description'],
    this.poster['imagePath'],
    this.date['date']
  )
  this.movieService.addMovie(newMovie);

}
}
