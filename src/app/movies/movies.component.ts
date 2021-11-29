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

  async createMovie(movie: Movie) {
    const newMovie = await this.moviesService.create(movie);
    this.allMovies?.push(newMovie);
  }

  async deleteMovie(movie: Movie) {
    const result = await this.moviesService.delete(movie);

    if (result === true) {
      const index = this.allMovies?.indexOf(movie, 0);
      if (index !== undefined && index > -1) {
        this.allMovies?.splice(index, 1);
      }
    }
  }
}
