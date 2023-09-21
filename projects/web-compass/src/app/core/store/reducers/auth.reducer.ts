import { createReducer, on } from '@ngrx/store';
import { StateAuth } from './../states/auth.state';
import { AuthActions, AuthApiActions } from '../actions/auth.actions';


export const ReducerAuth = createReducer(
  StateAuth,
  on(AuthActions.load, (currentState, newState) => ({ ...currentState, ...newState, loading: true })),
  on(AuthApiActions.loadSuccess, (currentState, newState) => ({ ...newState, loading: false })),
  on(AuthApiActions.loadFailure, (_state) => ({ ..._state, loading: false })),
);

