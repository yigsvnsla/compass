import { HttpEvent, HttpHandler, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthToken } from '../store/selectors/auth.selectors';
import { StateWebCompass } from '../store';
import { API_URL } from '../env/enviroment';

export function AuthTokenInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const store: Store<StateWebCompass> = inject(Store<StateWebCompass>)
  const token = store.selectSignal(selectAuthToken)
  if (!token() || (request.url.startsWith(API_URL) === false)) return next(request);
  const requestWhithHeader = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    }
  })
  return next(requestWhithHeader);
};
