import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      console.log('appending');
    const headers = req.headers.append('Auth-Token', 'Ultra-Secret-Token');
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
