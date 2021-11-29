import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'mz-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() movies: Movie[] | undefined;
  @Output() deleteMovie = new EventEmitter<Movie>();

  delete(movie: Movie) {
    this.deleteMovie.emit(movie);
  }
}
