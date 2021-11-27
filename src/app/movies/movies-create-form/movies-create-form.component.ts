import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from 'ngx-typesafe-forms';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'mz-movies-create-form',
  templateUrl: './movies-create-form.component.html',
  styleUrls: ['./movies-create-form.component.scss'],
})
export class MoviesCreateFormComponent {
  @Output()
  public createMovie = new EventEmitter<Movie>();

  moviesCreateForm = new FormGroup<Movie>({
    id: new FormControl<number>(0, []),
    title: new FormControl<string>('', [Validators.required]),
    year: new FormControl<number>(undefined, [
      Validators.required,
      Validators.min(1900),
      Validators.max(new Date().getFullYear()),
    ]),
    imdbTitleId: new FormControl<string>('', [Validators.required])
  });

  submit() {
    if (this.moviesCreateForm.valid) {
      this.createMovie.emit(this.moviesCreateForm.value);
      this.moviesCreateForm.reset();
    }
  }
}
