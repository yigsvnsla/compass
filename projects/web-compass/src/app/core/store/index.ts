import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { StateAuth } from './states/auth.state';
import { ReducerAuth } from './reducers/auth.reducer';
import { localStorageSyncReducer } from "./meta/meta-storage.reducer";
export interface StateWebCompass {
  stateAuth: StateAuth
}

export const reducers: ActionReducerMap<StateWebCompass> = {
  stateAuth: ReducerAuth
};

export const metaReducers: MetaReducer<StateWebCompass>[] = [localStorageSyncReducer];
