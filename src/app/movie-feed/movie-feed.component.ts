import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "../shared/poster.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-movie-feed',
  templateUrl: './movie-feed.component.html',
  styleUrls: ['./movie-feed.component.css']
})

export class MovieFeedComponent implements OnInit {
  posts: Post[] = [];
  private feedSelected = '';
  private nextPage = '1';

  constructor(private http: HttpClient, private router: Router,
    private route: ActivatedRoute) {}


   ngOnInit() {
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));

  }

  onSelectNowPlaying() {
   this.feedSelected = 'now_playing';
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
    return this.feedSelected;
  }

  onSelectPopular() {
    this.feedSelected = 'popular';
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=5')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
      return this.feedSelected;

  }

  onSelectUpcoming() {
    this.feedSelected = 'upcoming';
    this.http
    .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
    .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
    return this.feedSelected;

  }

  onNextPage() {
    this.nextPage = this.nextPage + '1';
    this.http
    .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page='+ this.nextPage)
    .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
  }
}




