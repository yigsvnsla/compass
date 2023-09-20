import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StateWebCompass } from "../index";
import { AuthActions } from '../actions/auth.actions';

export function localStorageSyncReducer(reducer: ActionReducer<StateWebCompass>): ActionReducer<StateWebCompass> {
  return localStorageSync(
    {
      keys: [
        { stateAuth:['username'] }
      ],
      rehydrate: true,
      removeOnUndefined: true,
    }
  )(reducer);
}
