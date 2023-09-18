import { createReducer, on } from '@ngrx/store';
import { StateAuth } from './../states/auth.state';
import { AuthActions, AuthApiActions } from '../actions/auth.actions';


export const ReducerAuth = createReducer(
  StateAuth,
  on(AuthActions.load, (_state, { password, username }) => ({ ..._state, username, password, loading: true })),
  on(AuthApiActions.loadSuccess, (_state, state) => ({ ..._state, ...state, loading: false })),
  on(AuthApiActions.loadFailure, (_state) => ({ ..._state, loading: false })),
);
