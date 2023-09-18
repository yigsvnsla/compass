import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideStore } from '@ngrx/store'
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './core/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UrlPatcherInterceptor } from './core/middlewares/url-patcher.interceptor';
import { provideEffects } from '@ngrx/effects';
import * as effects from './core/store/effects/indext';
import { AuthTokenInterceptor } from './core/middlewares/auth-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers, { metaReducers }),
    provideHttpClient(
      withInterceptors([
        UrlPatcherInterceptor,
        AuthTokenInterceptor
      ])
    ),
    provideEffects(effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ]
};
