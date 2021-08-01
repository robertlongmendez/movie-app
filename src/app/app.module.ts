import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MovieFeedComponent } from './movie-feed/movie-feed.component';
import { MovieFeedItemComponent } from './movie-feed/movie-feed-item/movie-feed-item.component';
import { StreamingComponent } from './movie-feed/streaming/streaming.component';
import { TrailerComponent } from './movie-feed/trailer/trailer.component';
import { TrailerModalComponent } from './trailer-modal/trailer-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './movies/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieFeedComponent,
    MovieFeedItemComponent,
    DropdownDirective,
    MovieStartComponent,
    MovieEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    StreamingComponent,
    TrailerComponent,
    TrailerModalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
