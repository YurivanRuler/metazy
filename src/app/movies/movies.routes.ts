import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

export const moviesRoutes: Routes = [
  { path: '', pathMatch: 'full', component: MoviesComponent },
];
