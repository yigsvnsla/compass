import { AuthSignin, AuthSignined, TypeGrant, TypeScope, TypeToken } from "../../interfaces/auth.interface";

export interface StateAuth extends AuthSignined {
  loading: boolean
  // client_id: string;
  // client_secret: string;
  // grant_type: TypeGrant;
  username: string;
  password: string;
  access_token: string,
  token_type: TypeToken,
  expires_in: number,
  scope: TypeScope
}

export const StateAuth: StateAuth = {
  loading: false,
  // client_id: '',
  // client_secret: '',
  // grant_type: '',
  username: '',
  password: '',
  access_token: '',
  token_type: '',
  expires_in: 0,
  scope: ''
};
