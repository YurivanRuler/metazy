import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './movies.routes';
import { MoviesCreateFormComponent } from './movies-create-form/movies-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent, MoviesCreateFormComponent],
  imports: [CommonModule, RouterModule.forChild(moviesRoutes), FormsModule, ReactiveFormsModule],
  exports: [MoviesComponent],
})
export class MoviesModule {}
