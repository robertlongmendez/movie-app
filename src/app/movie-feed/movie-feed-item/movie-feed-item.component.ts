import { Component, Input } from '@angular/core';

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

constructor() {}



onAddMovieToList() {}

}
