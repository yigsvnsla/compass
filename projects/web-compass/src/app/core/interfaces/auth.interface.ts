export interface AuthSignin {
  client_id: string;
  client_secret: string;
  grant_type: TypeGrant;
  username: string;
  password: string;
};
export interface AuthSignined {
  access_token: string,
  token_type: TypeToken,
  expires_in: number,
  scope: TypeScope
}

export type AuthCredentials = Pick<AuthSignin, 'username'> & Pick<AuthSignin, 'password'>;
export type AuthEnviroment = Omit<AuthSignin, 'username' | 'password'>;
export type TypeGrant = 'password' | '';
export type TypeToken = 'Bearer' | '';
export type TypeScope = 'read' | '';
