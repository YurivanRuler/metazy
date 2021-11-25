import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './movies.routes';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent],
  imports: [CommonModule, RouterModule.forChild(moviesRoutes)],
  exports: [MoviesComponent],
})
export class MoviesModule {}
