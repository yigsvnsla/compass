import { ApplicationConfig, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideStore } from '@ngrx/store'
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './core/store';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers, { metaReducers }),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ]
};
