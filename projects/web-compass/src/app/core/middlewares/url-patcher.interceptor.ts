import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlPatcherInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request = request.clone({ url: `${enviroment.API_URL}${enviroment.API_SUBFIX}${request.url}` });
    console.log('new request: ', request);
    return next.handle(request);
  }
}
