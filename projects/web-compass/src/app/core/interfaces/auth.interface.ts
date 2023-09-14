export interface AuthSignin {
  client_id: string;
  client_secret: string;
  grant_type: 'password';
  username: string;
  password: string;
}

export type AuthCredentials = Pick<AuthSignin, 'username'> & Pick<AuthSignin, 'password'>
export type AuthEnviroment = Omit<AuthSignin, 'username' | 'password'>

export interface AuthSignined {
  access_token: string,
  token_type: 'Bearer',
  expires_in: number,
  scope: 'read'
}


