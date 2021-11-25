import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'mz-movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  public allMovies: Movie[] | undefined;

  ngOnInit() {
    this.moviesService.getAll().then((movies) => {
      this.allMovies = movies;
    });
  }
}
