import { AUTH_CLIENT_ENV } from './../env/enviroment';
import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpController } from './http-controllers.service';
import { AuthCredentials, AuthSignined } from '../interfaces/auth.interface';
import { DATA_SOURCE } from '../enums/data-source.enum';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _httpController: HttpController = inject(HttpController);

  public singIn({ password, username }: AuthCredentials) {
    return this._httpController.auth<AuthCredentials, AuthSignined>({
      datasource: DATA_SOURCE.AUTH,
      path: `oauth2/access_token`,
      body: { password, username, ...AUTH_CLIENT_ENV }
    });
  };

  public session() {
    // return this._httpController.auth<AuthCredentials, AuthSignined>({
    //   datasource: DATA_SOURCE.AUTH,
    //   path: `oauth2/access_token`,
    //   body: { password, username, ...AUTH_CLIENT_ENV }
    // });
  }

};
