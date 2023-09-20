import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateWebCompass } from "..";
import { StateAuth } from "../states/auth.state";

export const selectStateAuth = (state: StateWebCompass) => state.stateAuth;

export const selectAuthIsLoading = createSelector(selectStateAuth, (state: StateAuth) => state.loading);
export const selectAuthToken = createSelector(selectStateAuth, (state: StateAuth) => state.access_token);
