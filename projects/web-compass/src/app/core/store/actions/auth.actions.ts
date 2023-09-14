import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StateUser } from '../reducers/user.reducer';

export const AuthActions = createActionGroup({
  source: '[Auth]',
  events: {
    'Load User': props<StateUser>(),
    'Load User Success': props<StateUser>(),
    'Load User Failure': props<{ error: unknown }>(),
  }
});
