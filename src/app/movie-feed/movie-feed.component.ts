import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "../shared/poster.model";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-movie-feed',
  templateUrl: './movie-feed.component.html',
  styleUrls: ['./movie-feed.component.css']
})

export class MovieFeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}


   ngOnInit() {
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/popular?api_key=97b2f2c2656e5a8bc166291808c8c4b2')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));

  }
}




