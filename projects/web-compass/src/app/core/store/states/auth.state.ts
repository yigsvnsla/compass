import { AuthSignin, AuthSignined, TypeGrant, TypeScope, TypeToken } from "../../interfaces/auth.interface";

export interface StateAuth extends Omit<AuthSignined, 'client_id' | 'client_secret' | 'grant_type' | 'password' |'scope'> {
  loading: boolean
  username: string;
  access_token: string,
  token_type: TypeToken,
  expires_in: number,
}

export const StateAuth: StateAuth = {
  loading: false,
  username: '',
  access_token: '',
  token_type: '',
  expires_in: 0,
};
