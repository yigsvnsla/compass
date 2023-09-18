import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../env/enviroment';

export function UrlPatcherInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  return next(request.clone({ url: `${API_URL}${request.url}` }));
};
