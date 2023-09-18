import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { StateAuth } from './states/auth.state';
import { ReducerAuth } from './reducers/auth.reducer';

export interface StateWebCompass {
  ReducerAuth: StateAuth
}

export const reducers: ActionReducerMap<StateWebCompass> = {
  ReducerAuth: ReducerAuth
};

export const metaReducers: MetaReducer<StateWebCompass>[] = isDevMode() ? [] : [];
