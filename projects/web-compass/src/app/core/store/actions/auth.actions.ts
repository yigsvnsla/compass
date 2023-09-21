import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StateAuth } from '../states/auth.state';
import { AuthCredentials, AuthSignined } from '../../interfaces/auth.interface';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Load': props<AuthCredentials>(),
  }
});

export const AuthApiActions = createActionGroup({
  source: 'Auth API',
  events: {
    'Load Success': props<Omit<AuthSignined, 'scope'> & Pick<AuthCredentials, 'username'>>(),
    'Load Failure': props<{ error: unknown }>(),
  }
});
