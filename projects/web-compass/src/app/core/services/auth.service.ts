import { AUTH_CLIENT_ENV } from './../env/enviroment';
import { Injectable, inject } from '@angular/core';
import { HttpController } from './http-controllers.service';
import { AuthCredentials, AuthSignined } from '../interfaces/auth.interface';
import { DATA_SOURCE } from '../enums/data-source.enum';

@Injectable({
  providedIn: 'platform'
})
export class AuthService {

  private readonly _httpController: HttpController = inject(HttpController);

  public singIn({ password, username }: AuthCredentials) {
    return this._httpController.auth<AuthCredentials, AuthSignined>({
      datasource: DATA_SOURCE.AUTH,
      path: `oauth2/access_token`,
      queryParams: { password, username, ...AUTH_CLIENT_ENV }
    });
  };

};
