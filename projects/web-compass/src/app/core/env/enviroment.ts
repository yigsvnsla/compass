import { DATA_SOURCE } from "../enums/data-source.enum";
import { AuthEnviroment } from "../interfaces/auth.interface";

// export const API_ENV = {
//   production: false,
//   protocol: 'http' ,
//   subDomain: "",
//   domain: '192.168.100.65',
//   port: 8000,
//   gateway: '',
//   dataSource: DATA_SOURCE,
//   apiVersion: 'v1',
//   prefix: 'api',
// } as const

export const API_ENV = {
  production: false,
  protocol: 'https' ,
  subDomain: undefined,
  domain: 'pnslzvzk-8000.brs.devtunnels.ms',
  port: undefined,
  gateway: undefined,
  dataSource: DATA_SOURCE,
  apiVersion: 'v1',
  prefix: 'api',
} as const

export const AUTH_CLIENT_ENV : AuthEnviroment = {
  client_id: '403f407cfabfcc85caa7',
  client_secret: 'cd2d9b3d00a517dfaf877fceb716ee4e24b41af4',
  grant_type: 'password',
} as const

export const API_URL: string = `${API_ENV['protocol']}://${API_ENV['subDomain'] ? API_ENV['subDomain'] + '.' : ''}${API_ENV['domain']}${API_ENV['port'] ? ':' + API_ENV['port'] : ''}/${API_ENV['gateway'] ? API_ENV['gateway'] + '/' : ''}`;

