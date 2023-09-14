import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface StateUser {
  loading: boolean
}

export const initialState: StateUser = {
  loading: false
};

export const reducerUser = createReducer(
  initialState,
  on(UserActions.loadUserSuccess, (_state, { loading }) => ({ ..._state, loading: false }))
);

