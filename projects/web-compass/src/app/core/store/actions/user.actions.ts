import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StateUser } from '../reducers/user.reducer';

export const UserActions = createActionGroup({
  source: '[User]',
  events: {
    'Load User': props<StateUser>(),
    'Load User Success': props<StateUser>(),
    'Load User Failure': props<{ error: unknown }>(),
  }
});

// export const UserApiActions = createActionGroup({
//   source: '[User/API]',
//   events: {
//     'Load Users': emptyProps(),
//     'Load Users Success': props<{ data: unknown }>(),
//     'Load Users Failure': props<{ error: unknown }>(),
//   }
// });
