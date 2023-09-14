import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { reducerUser, StateUser } from './reducers/user.reducer';

export interface StateWebCompass {
  User: StateUser
}

export const reducers: ActionReducerMap<StateWebCompass> = {
  User: reducerUser,

};


export const metaReducers: MetaReducer<StateWebCompass>[] = isDevMode() ? [] : [];
