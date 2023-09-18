import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { AuthActions, AuthApiActions } from '../actions/auth.actions';
export const LoadAuthEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$
      .pipe(
        ofType(AuthActions.load),
        exhaustMap(
          (effectCredentials) => authService
            .singIn(effectCredentials)
            .pipe(
              map((response) => AuthApiActions.loadSuccess({ ...response.data, ...effectCredentials })),
              catchError((error: { message: string }) => of(AuthApiActions.loadFailure({ error: error.message })))
            )
        )
      )
  },
  { functional: true }
);

export const LoadAuthErrorEffect = createEffect(
  () => {
    return inject(Actions)
      .pipe(
        ofType(AuthApiActions.loadFailure),
        tap(({ error }) => alert(error))
      );
  },
  { functional: true, dispatch: false }
);
