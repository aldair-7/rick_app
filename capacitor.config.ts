import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'rick_and_morty',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
