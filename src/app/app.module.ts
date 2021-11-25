import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), MoviesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
