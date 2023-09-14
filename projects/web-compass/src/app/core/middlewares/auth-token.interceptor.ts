import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enviroment } from 'src/env/env';
import { selectorUserToken } from '../store/selectors/auth.selectors';
import { RootState } from '../store/states/root.state';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptor {
  private store: Store<RootState> = inject(Store<RootState>)


  private isThirdPartyRequest(url: string): boolean {
    return url.startsWith(enviroment.API_URL) === false
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let userToken: string = '';
    this.store.select(selectorUserToken).subscribe(token => userToken = token).unsubscribe();
    console.log(!userToken || this.isThirdPartyRequest(req.url));
    if (!userToken || this.isThirdPartyRequest(req.url)) return next.handle(req);

    const requestWhithHeader = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userToken}`,
      }
    })
    return next.handle(requestWhithHeader);
  }

}
