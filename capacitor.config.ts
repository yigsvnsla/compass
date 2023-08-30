import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'compass',
  webDir: 'dist/app-compass',
  server: {
    androidScheme: 'https'
  }
};

export default config;
