import { Routes } from '@angular/router';
import { moviesRoutes } from './movies/movies.routes';

export const routes: Routes = [
  {
    path: 'movies',
    children: moviesRoutes,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
  },
];
