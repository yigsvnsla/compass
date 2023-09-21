import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StateWebCompass } from "../index";


export function localStorageSyncReducer(reducer: ActionReducer<StateWebCompass>): ActionReducer<StateWebCompass> {
  return localStorageSync(
    {
      keys: [
        { stateAuth:['username', 'access_token', 'token_type', 'expires_in'] }
      ],
      rehydrate: true,
      removeOnUndefined: true,
    }
  )(reducer);
}
