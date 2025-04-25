
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f127fe1582794fcc8625abff641c0103',
  appName: 'route-one-connect',
  webDir: 'dist',
  server: {
    url: 'https://f127fe15-8279-4fcc-8625-abff641c0103.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    scheme: 'route-one-connect'
  }
};

export default config;
