import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { lastValueFrom } from 'rxjs';
import { ApiHttpService } from 'src/app/shared/services/api-http.service';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: ApiHttpService, private constants: Constants) {}

  async getAll(): Promise<Movie[]> {
    return lastValueFrom(this.http.get<Movie[]>(`${this.constants.API_ENDPOINT}/movies/`));
  }

  async create(movie: Movie): Promise<Movie> {
    return lastValueFrom(this.http.post<Movie>(`${this.constants.API_ENDPOINT}/movies/`, movie));
  }

  async delete(movie: Movie): Promise<unknown> {
    lastValueFrom(this.http.delete(`${this.constants.API_ENDPOINT}/movies/`, movie.id));
    return true;
  }
}
