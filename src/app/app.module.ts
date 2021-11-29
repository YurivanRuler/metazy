import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { routes } from './routes';
import { AuthTokenInterceptor } from './shared/interceptors/http.interceptor';
import { ApiHttpService } from './shared/services/api-http.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MoviesModule,
    SharedModule,
  ],
  providers: [
    ApiHttpService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
