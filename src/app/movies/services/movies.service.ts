import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      id: 1,
      title: 'The Pianist',
      year: 2002,
      imdbTitleId: 'tt0253474',
    },
    {
      id: 2,
      title: 'Forrest Gump',
      year: 1994,
      imdbTitleId: 'tt0109830',
    },
    {
      id: 3,
      title: 'The Silence of the Lambs',
      year: 1991,
      imdbTitleId: 'tt0102926',
    },
    {
      id: 4,
      title: 'Hachi',
      year: 2009,
      imdbTitleId: 'tt1028532',
    },
    {
      id: 5,
      title: 'Saving Private Ryan',
      year: 1998,
      imdbTitleId: 'tt0120815',
    }
  ]

  async getAll(): Promise<Movie[]> {
    return this.movies;
  }

  async create(movie: Movie): Promise<Movie> {
    movie.id = this.movies.length + 1;
    return movie;
  }
}
